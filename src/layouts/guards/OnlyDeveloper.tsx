import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  useEffect(() => {
    if (
      !isAuthenticated ||
      !user?.roles.map((role) => role.code)?.includes("DEVELOPER" as any)
    ) {
      return navigate("/auth/login");
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
