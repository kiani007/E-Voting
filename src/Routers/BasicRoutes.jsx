import React, { Suspense, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/index';
import { Loader } from '../components/Loader';
import { Layout } from '../layout/index';

const BasicRoutes = ({ Component, args }) => {
  const { loggedIn } = useAuth();
  //make artifical delay
  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);
  return loggedIn ? (
    <Navigate to="/e-voting-system" />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Component {...args} />
      </Suspense>
    </Layout>
  );
};

export default BasicRoutes;
