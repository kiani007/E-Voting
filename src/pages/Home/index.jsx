import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
} from '@mui/material';
import { Footer, Header } from '@/layout';
import { useNavigate } from 'react-router-dom';
import vote from '../../assets/vote-img.png';
import { loginCredential } from '../../db/data';
const index = () => {
  const user = JSON.stringify(loginCredential);
  localStorage.setItem('loginCredential', user);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <Container sx={{ backgroundColor: 'white' }}>
      <Grid container spacing={3} sx={{ justifyContent: 'center', mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            height: '400px',
            width: '400px',
            borderRadius: '50%',
            margin: '0 auto',
          }}
        >
          <img src={vote} alt="vote.png" />
        </Box>
        <Grid item lg={6} xs={6} sx={{ pb: 2 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Join Now For Voting
          </Typography>
          <Typography variant="body1" gutterBottom>
            Connect for Simple,free and fair Voting at you finger tips!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Let's get started!
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ p: 4, mt: 4 }}>
          <Button
            p={3}
            onClick={handleLogin}
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ p: 4, mt: 4 }}>
          <Button
            p={3}
            onClick={handleSignUp}
            fullWidth
            variant="outlined"
            color="primary"
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
