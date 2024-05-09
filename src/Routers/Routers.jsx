import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { Home, Login, SignUp } from '@/pages';
import { CandidatesRoutes } from '../Dashboard';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../Auth/index';
import BasicRoutes from './BasicRoutes';
import MainRoutes from './MainRoutes';
import ErrorPage from '../pages/ErrorPage';
const Routers = () => {
  const { loggedIn } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <BasicRoutes
              Component={() => {
                return <MainRoutes />;
              }}
            />
          }
        />
        <Route
          path="/e-voting-system/*"
          element={
            <PrivateRoute
              Component={() => {
                return <CandidatesRoutes />;
              }}
            />
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
