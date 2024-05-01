import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Login, SignUp } from '@/pages';
import { CandidatesRoutes } from '../Dashboard';
import PrivateRoute from './PrivateRoute';
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
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

        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
};

export default Routers;
