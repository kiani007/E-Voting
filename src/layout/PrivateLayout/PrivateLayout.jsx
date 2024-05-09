import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header, Navbar } from '..';
import { Sidebar } from '../../components';

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
    <>
      <Box position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          maxWidth: '100%',
          paddingTop: '4rem',
          [theme.breakpoints.up('lg')]: {
            paddingLeft: collapsed ? '4rem' : '17.5rem',
          },
        }}
      >
        <Container
          sx={{
            py: '2rem',
            pb: '1rem',
            minHeight: '100vh',
            bgcolor: '#F8F9FA', //theme.palette.background.default,
          }}
        >
          {children}
        </Container>
        <Typography
          variant="caption"
          display="block"
          textAlign="center"
          sx={{ py: '1rem' }}
        >
          Copyright ©{new Date().getFullYear()} E-Voting System.
          <br />
          All rights reserved.
        </Typography>
      </Box>
      <Navbar />
    </>
  );
};

export default PrivateLayout;
