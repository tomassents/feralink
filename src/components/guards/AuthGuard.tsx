import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
}

// For routes that can only be accessed by authenticated users
const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
