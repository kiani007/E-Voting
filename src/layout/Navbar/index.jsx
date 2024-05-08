import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../Auth/index';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component={AppBar}
      sx={{
        bgcolor: 'white',
        color: 'primary.main',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        component="nav"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          EV
        </Typography>
        {!loggedIn ? (
          <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* Normal buttons for desktop view */}
              <Button
                component={RouterLink}
                to="/"
                color="primary"
                variant="text"
                sx={{ mx: 1 }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                color="primary"
                variant="text"
                sx={{ mx: 1 }}
              >
                About
              </Button>
              <Button
                component={RouterLink}
                to="/login"
                color="primary"
                variant="text"
                sx={{ mx: 1 }}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/sign-up"
                color="primary"
                variant="text"
                sx={{ mx: 1 }}
              >
                Signup
              </Button>
            </Box>
            <IconButton
              size="large"
              color="primary"
              onClick={handleMenuOpen}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <FaBars />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              {/* Normal buttons for mobile view */}
              <Stack
                direction="column"
                spacing={2}
                p={2}
                color="primary.main"
                style={{
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  height: '80vh',
                  width: '30vw',
                  boxShadow: '34px 37px 13px -25px rgba(74,58,58,0.02) inset',
                  ':hover': { color: 'success.main' },
                }}
              >
                <MenuItem
                  component={RouterLink}
                  to="/"
                  onClick={handleMenuClose}
                >
                  Home
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/about"
                  onClick={handleMenuClose}
                >
                  About
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/login"
                  onClick={handleMenuClose}
                >
                  Login
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/sign-up"
                  onClick={handleMenuClose}
                >
                  Signup
                </MenuItem>
              </Stack>
            </Menu>
          </>
        ) : (
          <Button onClick={handleLogout} variant="text">
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
