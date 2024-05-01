import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Avatar,
} from '@mui/material';

const index = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // save this to local storage
    localStorage.setItem(
      'loginCredential',
      JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{
          marginTop: '8rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 2,
            bgcolor: 'primary.main',
            width: 150,
            height: 150,
          }}
        />
        <Typography component="h1" variant="h5" fontWeight={'bold'}>
          Sign Up
        </Typography>
        <form
          style={{ width: '100%', marginTop: '2rem' }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Phone Number"
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '1rem 0' }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default index;
