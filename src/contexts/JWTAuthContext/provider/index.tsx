import { useReducer, ReactNode, useEffect } from "react";

import axios from "../../../utils/axios";
import { setSession, isValidToken } from "../utils/token";
import { reducer, initialAuthState } from "..";
import AuthContext from "..";
import Loading from "../../../components/common/Loading";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email: string, password: string) => {
    const { status, data } = await axios.post("/auth/login", {
      email,
      password,
    });
    if (status === 200) {
      const user = data.data.user;
      const token = data.data.tokens.accessToken;
      setSession(token);
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          status: "success",
        },
      });
    } else {
      dispatch({
        type: "LOGIN",
        payload: {
          status: "error",
        },
      });
    }
  };

  const confirmEmail = async (token: string) => {
    return axios.get(`/auth/confirm/${token}`);
  };

  const register = async (
    name: string,
    lastName: string,
    email: string,
    tel: string,
    password: string
  ) => {
    const response = await axios.post("/signup", {
      name,
      lastname: lastName,
      email,
      telephone: tel,
      password,
    });

    const { user } = response.data.data;
    dispatch({
      type: "REGISTER",
      payload: { user, isAuthenticated: user?.verified || false },
    });
    return response.data.data;
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT", payload: {} });
  };

  const setIsAuthenticated = (isAuthenticated: boolean) => {
    dispatch({
      type: "SET_IS_AUTHENTICATED",
      payload: { isAuthenticated },
    });
  };

  useEffect(() => {
    const initialise = async () => {
      try {
        const token = window.localStorage.getItem("token");

        if (token && isValidToken(token)) {
          setSession(token);
          const response = await axios.get("/profile/my");
          const user = response.data.data;

          dispatch({
            type: "INITIALISE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALISE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: "INITIALISE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        logout,
        login,
        register,
        // @ts-ignore
        confirmEmail,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
