// src/components/PrivateRoute/PrivateRoute.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext ';

const PrivateRoute = () => {
  const { user } = useAuth(); 

  if (!user) {
    
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
