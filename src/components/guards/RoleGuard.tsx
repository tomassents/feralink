import React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

interface RoleGuardType {
  children: React.ReactNode;
  roles: string[];
}

// Para rutas que solo pueden ser accedidas por usuarios con roles específicos
function RoleGuard({ children, roles }: RoleGuardType) {
  const { user } = useAuth();

  if (!user || !roles.includes(user.role)) {
    // Si el usuario no tiene el rol requerido, redirigir a su página por defecto según su rol
    const redirectMap = {
      admin: "/admin",
      clinic: "/clinic",
      doctor: "/doctor",
      client: "/client",
    };

    return <Navigate to={redirectMap[user?.role as keyof typeof redirectMap] || "/"} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default RoleGuard; 