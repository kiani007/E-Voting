import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../Auth/index';

const PrivateRoute = ({ Component, ...rest }) => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
