import axios from "../../../utils/axios";

export const confirmEmail = async (token: string, verificationCode: string) => {
  const response = await axios.post(`/confirm-email/${token}`, {
    verificationCode,
  });
};
