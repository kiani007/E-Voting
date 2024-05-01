import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header, Navbar } from '../layout';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box pt={2} pb={2}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
