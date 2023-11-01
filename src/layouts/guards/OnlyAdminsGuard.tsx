import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { hasCommonElement } from "../../utils/array";

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const userRoles = user?.roles.map((role) => role.code);
  useEffect(() => {
    if (
      !isAuthenticated ||
      !hasCommonElement<string>(userRoles as string[], ["DEVELOPER", "ADMIN"])
    ) {
      return navigate("/auth/login");
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
