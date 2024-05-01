import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../Auth/index';
export const BasicRoutes = ({ Component, args }) => {
  const { loggedIn } = useAuth();
  return loggedIn ? (
    <Navigate to="/e-voting-system" />
  ) : (
    <Component {...args} />
  );
};
