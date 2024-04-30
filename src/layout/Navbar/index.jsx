import React from "react";
import { Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <Button
        component={Link}
        to="/"
        color="primary"
        variant="text"
        sx={{ marginRight: 2 }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/about"
        color="primary"
        variant="text"
        sx={{ marginRight: 2 }}
      >
        About
      </Button>
      <Button
        component={Link}
        to="/login"
        color="primary"
        variant="text"
        sx={{ marginRight: 2 }}
      >
        Login
      </Button>
      <Button
        component={Link}
        to="/sign-up"
        color="primary"
        variant="text"
        sx={{ marginRight: 2 }}
      >
        Signup
      </Button>
    </nav>
  );
};

export default Navbar;
