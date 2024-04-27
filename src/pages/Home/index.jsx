import React from 'react';
import { Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { Navbar, Footer } from '@/layout';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };  

  const handleSignUp = () => {
    navigate('/sign-up');
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container sx={{ mt: 4, flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Avatar
                alt="E-Voting Logo"
                src="/evoting_logo.png"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Welcome to E-Voting System
              </Typography>
              <Typography variant="body1" gutterBottom>
                Here you can find all necessary information about our e-voting application.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Instructions for e-voting...
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleLogin} fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleSignUp} fullWidth variant="outlined" color="primary">
                Signup
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
  );
};

export default index;
