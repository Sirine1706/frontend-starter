import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../../../hooks/useAuth";
import { useAppDispatch } from "../../../hooks/redux";

type Props = {};

function index({}: Props) {
  const dispatch: Function = useAppDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout(dispatch);
    navigate("/auth/login");
  }, []);

  return null;
}

export default index;
