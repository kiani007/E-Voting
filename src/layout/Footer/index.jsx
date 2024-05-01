import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const styles = {
  footer: {
    marginTop: 'auto',
  },
};

function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} E-Voting System. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
