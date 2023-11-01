import axios from "../../../utils/axios";
import { setSession } from "../utils/token";

export const login = async (
  email: string,
  password: string,
  dispatch: Function
) => {
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
