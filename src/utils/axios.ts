import axios from "axios";

const baseURL: string = import.meta.env.VITE_BACKEND_BASE_URL as string;

const axiosInstance = axios.create({ baseURL });
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "something went wrong"
    )
);

export default axiosInstance;
