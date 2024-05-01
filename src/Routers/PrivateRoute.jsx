import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../Auth/index';

const PrivateRoute = ({ element, ...rest }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? <element {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
