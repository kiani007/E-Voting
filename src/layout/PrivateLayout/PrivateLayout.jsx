import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header, Navbar } from '..';
import { Sidebar } from '../../components';
const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mt: 15 }}>
          <Sidebar
            collapsed={collapsed}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
          />
        </Box>
        <Container
          maxWidth="md"
          sx={{ mb: 20, bgcolor: '#F8F9FA', borderRadius: '10px', mt: 4 }}
        >
          <Header />
          <Box pt={2} pb={2} sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default PrivateLayout;
