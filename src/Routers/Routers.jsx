import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, SignUp, Dashboard, PresidentialCandidate } from "@/pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/e-voting-system" element={<Dashboard />} />
        <Route
          path="/presidential-election"
          element={<PresidentialCandidate />}
        />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
};

export default Routers;
