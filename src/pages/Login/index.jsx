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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from '../../Auth';
import loginAvatar from '../../assets/LoginAvatar.png';
import bgLoign from '../../assets/bgLogin.jpg';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
useAuth;
const Index = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //GET LOCAL STORAGE DATA AND COMPARE USER credentials
    const user = localStorage.getItem('user');
    const credentials = user && JSON.parse(user);
    const loginCredential = localStorage.getItem('loginCredential');
    const credentials2 = loginCredential && JSON.parse(loginCredential);

    if (
      (credentials &&
        credentials.email === data.get('email') &&
        credentials.password === data.get('password')) ||
      (credentials2 &&
        credentials2[0].email === data.get('email') &&
        credentials2[0].password === data.get('password'))
    ) {
      login();
    } else {
      alert('Invalid credentials');
    }
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
          justifyContent: 'center',
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
            We are happy to see you back with us
          </Typography>
          <form
            style={{ width: '100%', marginTop: '1rem' }}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '1rem 0' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forget-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
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
            <Card title="Login">
              <CardMedia
                component="img"
                image={loginAvatar}
                alt="login avatar"
                borderRadius="10px"
                sx={{
                  maxWidth: '500px',
                  maxHeight: '500px',
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
              />
            </Card>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Index;
