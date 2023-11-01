import React from "react";

type FetchStatus = "loading" | "idle" | "failed" | "success";

const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = React.useState<any | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<FetchStatus>("idle");
  const [abort, setAbort] = React.useState<(() => void)>(() => {});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("loading");
        const abortController = new AbortController();
        const signal = abortController.signal;
        setAbort(() => abortController.abort());
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setStatus("success");
      } catch (error: any) {
        setError(error);
        setStatus("failed");
      }
    };
    fetchData();
    return () => {
      abort();
    };
  }, []);

  return { response, error, status, abort };
};



// ######################################""
//               USAGE
// ######################################""


// +++ Fetching data with custom headers
// const headers = new Headers();
// headers.append('Authorization', 'Bearer token123');

// const options = {
//   method: 'GET',
//   headers: headers,
// };

// const { response, error, abort } = useFetch('https://api.example.com/data', options);


// +++ Fetching data with POST request and custom body
// const body = JSON.stringify({
//   username: 'user123',
//   password: 'password123',
// });

// const options = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: body,
// };

// const { response, error, abort } = useFetch('https://api.example.com/login', options);


// +++ Fetching data with custom timeout
// const body = JSON.stringify({
//   username: 'user123',
//   password: 'password123',
// });

// const options = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: body,
// };

// const { response, error, abort } = useFetch('https://api.example.com/login', options);




