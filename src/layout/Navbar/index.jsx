import React from 'react';
import { AppBar, Button, Typography, Box } from '@mui/material';
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/index';
const Navbar = () => {
  const { loggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <Box
      component={AppBar}
      sx={{
        bgcolor: 'white',
        color: 'primary.main',
        justifyContent: 'space-around',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        component="nav"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexGrow: 1,
          p: 2,
          justifyContent: 'space-around',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          EV
        </Typography>
        {!loggedIn ? (
          <>
            <Button
              component={RouterLink}
              to="/"
              color="primary"
              variant="text"
              sx={{ marginRight: 2 }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              color="primary"
              variant="text"
              sx={{ marginRight: 2 }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              color="primary"
              variant="text"
              sx={{ marginRight: 2 }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/sign-up"
              color="primary"
              variant="text"
              sx={{ marginRight: 2 }}
            >
              Signup
            </Button>
          </>
        ) : (
          <Button onClick={handleLogout} variant="text" sx={{ marginRight: 2 }}>
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
