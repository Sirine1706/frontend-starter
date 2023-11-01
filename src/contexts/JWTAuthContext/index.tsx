import { createContext } from "react";
import { PayloadAction } from "@reduxjs/toolkit";

import { JWTState } from "../../types/contexts";

export const initialAuthState: JWTState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
  token: null,
  status: "idle",
};

export const reducer = (state: JWTState, action: PayloadAction<JWTState>) => {
  switch (action.type) {
    case "INITIALISE": {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case "LOGIN": {
      const { user, status } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
        status,
      };
    }
    case "REGISTER": {
      const { user } = action.payload;
      return {
        ...state,
        isAuthenticated: user?.verified || false,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: "JWT",
  login: (email: string, password: string, dispatch?: Function) =>
    Promise.resolve(),
  forgotPassword: (email: string) => Promise.resolve(),
  register: (
    name: string,
    lastName: string,
    email: string,
    tel: string,
    password: string,
    dispatch?: Function
  ) => Promise.resolve(),
  logout: (dispatch?: Function) => {},
  confirmEmail: (token: string) => Promise.resolve(),
  setIsAuthenticated: (isAuthenticated: boolean) => {},
});

export default AuthContext;
