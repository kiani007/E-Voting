import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaUser, FaAngleDoubleLeft, FaAngleDoubleRight, FaChartBar } from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';
import { MdDashboardCustomize } from 'react-icons/md';
import { Box, Typography, Button } from '@mui/material';
import theme from '../../../theme';
import { useAuth } from '../../Auth';

const Index = ({ collapsed, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      rootStyles={{
        '.sidebar-container': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '3rem',
          padding: '1rem 1rem',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold',cursor: 'pointer' }}  onClick={handleCollapsedChange} >EV</Typography>
      </Box>

      <Menu
        style={{marginTop: '2rem', marginBottom: '1rem'}}
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#f0f0f0', 
              color: '#000',
            },
          },
        }}
      >
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

      </Menu>

        <Box
          onClick={handleLogout}
        style={{
    
            cursor: 'pointer',
            position: 'absolute',
            bottom: 0,
          padding: '1rem 1rem 1rem 2rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '1rem',
            height: '3rem',
            width: '100%',
            backgroundColor: '#f0f0f0',
            color: '#000',
          }}
      >
          <HiLogout />
          {!collapsed ? 'Logout' : ""}
        </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClick={handleCollapsedChange}
          sx={{ padding: '1rem 0',backgroundColor: '#f0f0f0', color: '#000' }}
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </Button>
      </Box>
    </Sidebar>
  );
};

export default Index;
