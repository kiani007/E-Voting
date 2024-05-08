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
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import voteAvatar from '../../assets/voteAvatar.png';
import bgLoign from '../../assets/bgLogin.jpg';
const index = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
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
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        mt: 2,
        backgroundColor: '#E9ECEF',
        borderRadius: '10px',
        padding: '2rem',
        mb: 8,
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ padding: '1rem' }}>
          <Typography
            align="start"
            component="h1"
            variant="h3"
            sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
          >
            Welcome
          </Typography>
          <Typography variant="body1" align="start">
            Create an account
          </Typography>
          <form
            style={{ width: '100%', marginTop: '1rem' }}
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
        </Box>
        {isMd && (
          <Box
            sx={{
              m: 2,
              padding: '3rem',
              borderRadius: '10px',
            }}
          >
            {/* set it as non selectable image non downloadable */}
            <Card title="sign up" backgroundColor="#E9ECEF">
              <CardMedia
                component="img"
                image={voteAvatar}
                alt="login avatar"
                sx={{
                  width: '500px',
                  height: '500px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  '-webkit-user-drag': 'none',
                  '-khtml-user-drag': 'none',
                  '-moz-user-drag': 'none',
                  '-o-user-drag': 'none',
                  userDrag: 'none',
                  WebkitUserDrag: 'none',
                  MozUserDrag: 'none',
                  OUserDrag: 'none',
                  msUserDrag: 'none',
                }}
                borderRadius="10px"
              />
            </Card>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default index;
