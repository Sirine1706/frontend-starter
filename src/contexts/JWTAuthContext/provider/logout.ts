import { setSession } from "../utils/token";

export const logout = (dispatch: Function): void => {
  setSession(null);
  dispatch({ type: "LOGOUT", payload: {} });
};
