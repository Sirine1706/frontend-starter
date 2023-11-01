import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isAuthorised, setIsAuthorised] = React.useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    } else {
      setIsAuthorised(true);
    }
  }, []);

  return <>{isAuthorised && <>{children}</>}</>;
};

export default GuestGuard;
