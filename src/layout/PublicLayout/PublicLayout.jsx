import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header } from '../index';
const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          mt: '5rem',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default PublicLayout;
