import { toast, Theme, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base = {
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = (
  message: string,
  status: "success" | "error" | "info" | "warning",
  theme: Theme = "light",
  autoClose: number = 1000,
  position: ToastPosition = "top-right"
) => {
  const args = {
    ...base,
    autoClose,
    position,
    theme,
  };
  if (status === "success") {
    toast.success(message, args);
  }
  if (status === "error") {
    toast.error(message, args);
  }
  if (status === "info") {
    toast.info(message, args);
  }
  if (status === "warning") {
    toast.warning(message, args);
  }
};
