import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './banner/Loading';
import { useAuth } from '../AuthLayout/auth/AuthProvider';


const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivetRoute;
