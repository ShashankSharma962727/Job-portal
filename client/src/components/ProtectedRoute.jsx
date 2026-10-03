import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ allowedRole }) => {
  const {user} = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
