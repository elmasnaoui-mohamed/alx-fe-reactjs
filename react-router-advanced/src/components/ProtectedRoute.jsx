import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false;

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
