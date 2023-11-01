import jwtDecode from "jwt-decode";

import { DecodedToken } from "../../../types/contexts";
import axios from "../../../utils/axios";

export const isValidToken = (token: string): boolean => {
  if (!token) {
    return false;
  }

  const decoded: DecodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const setSession = (token: string | null) => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};
