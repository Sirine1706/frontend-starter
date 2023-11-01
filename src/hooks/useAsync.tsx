import React from "react";

const useAsync = (fn: (() => Promise<any>) | null) => {
  const initialState: {
    loading: boolean;
    error: null | Error;
    value: null | any;
  } = { loading: false, error: null, value: null };
  const stateReducer = (_: any, action: any) => {
    switch (action.type) {
      case "start":
        return { loading: true, error: null, value: null };
      case "finish":
        return { loading: false, error: null, value: action.value };
      case "error":
        return { loading: false, error: action.error, value: null };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  const run = React.useCallback(async (args = null) => {
    try {
      dispatch({ type: "start" });
      // @ts-ignore
      const value = await fn!(args);
      dispatch({ type: "finish", value });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, [fn]);

  return { ...state, run };
};


// #######################################
//               USAGE
// #######################################

// const fetchData = async () => {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   return data;
// };

// const MyComponent = () => {
//   const { loading, error, value, run } = useAsync(fetchData);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {value && (
//         <ul>
//           {value.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//       <button onClick={run}>Fetch Data</button>
//     </div>
//   );
// };
