import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

interface GuestGuardProps {
  children: ReactNode;
}

// For routes that can only be accessed by unauthenticated users
const GuestGuard = ({ children }: GuestGuardProps) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user) {
    // Redirect based on user role
    const roleRoutes: { [key: string]: string } = {
      Admin: "/admin",
      Doctor: "/doctor",
      Client: "/client",
      Clinic: "/clinic",
    };

    const route = roleRoutes[user.Role.name] || "/client";
    return <Navigate to={route} />;
  }

  return <>{children}</>;
};

export default GuestGuard;
