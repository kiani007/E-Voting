import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Sidebar } from '../../components';
import Navbar from '../Navbar';

const PrivateLayout = ({ children }) => {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };



  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        rootStyles={{
          '.sidebar-container': {
            height: '100%',
            overflowY: 'auto', 
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.primary.main,
          position: 'relative', 
          overflow: 'hidden', 
        }}
      >
        {/* //Navbar */}
        <Navbar />

        {/* //Content */}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            padding: 0,
            margin: 0,
            paddingTop: '4rem', 
          }}
          maxWidth={false}
          
        >
          {children}
        </Container>
      </Box>
    </div>
  );
};

export default PrivateLayout;
