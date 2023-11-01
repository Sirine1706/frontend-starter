import axios from "../../../utils/axios";

export const register = async (
  name: string,
  lastName: string,
  email: string,
  tel: string,
  password: string,
  dispatch: Function
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
