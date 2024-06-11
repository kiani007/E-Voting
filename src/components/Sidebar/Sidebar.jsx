import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaUser, FaAngleDoubleLeft, FaAngleDoubleRight, FaChartBar } from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';
import { MdDashboardCustomize } from 'react-icons/md';
import { Box, Typography, Button, IconButton } from '@mui/material';
import theme from '../../../theme';
import { useAuth } from '../../Auth';

const Index = ({ collapsed, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', height: '100vh', margin: 0 }}>
      <Sidebar
        anchor="left"
        sx={{
          '& .simplebar-scrollbar': {
            display: 'none',
          },
          '& .simplebar-content': {
            height: '100vh',
            padding: 0,
          },
          '& .simplebar-scrollbar:before': {
            background: 'transparent',
          },
        }}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="lg"
        collapsedWidth="4rem"
        width={collapsed ? '4rem' : '100vw'}
        style={{ height: '100vh', margin: 0 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            padding: 0,
            margin: 0,
          }}
        >
          <Menu
            menuItemStyles={{
              root: {
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.success.main,
                },
              },
              button: {
                '&.active': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.success.main,
                },
              },
            }}
            toggleButtonStyles={{
              root: {
                display: 'none',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                alignContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: '0 1rem',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Typography
                  onClick={handleCollapsedChange}
                  variant="h6"
                  sx={{ fontWeight: 'bold', py: 2, cursor: 'pointer' }}
                >
                  {collapsed ? 'EV' : 'E - Voting'}
                </Typography>
              </Box>
              <Box>
                <MenuItem
                  icon={<FaUser />}
                  component={<Link to="/e-voting-system/my-profile" />}
                >
                  My Profile
                </MenuItem>
                <MenuItem
                  icon={<MdDashboardCustomize />}
                  component={<Link to="/e-voting-system" />}
                >
                  Voting Dashboard
                </MenuItem>
                <MenuItem
                  icon={<FaChartBar />}
                  component={<Link to="/e-voting-system/electorial-matrix" />}
                >
                  Result Matrix
                </MenuItem>
              </Box>
              <MenuItem
                icon={<HiLogout />}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </Box>
          </Menu>
        </Box>
      </Sidebar>
      <IconButton
        onClick={handleCollapsedChange}
        sx={{
          position: 'absolute',
          right: collapsed ? '1rem' : '1.5rem',
          bottom: '1rem',
          transform: 'translateX(50%)',
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          zIndex: 1300, 
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </IconButton>
    </Box>
  );
};

export default Index;
