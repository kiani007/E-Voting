import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import { useAuth } from '../../Auth';
import loginAvatar from '../../assets/LoginAvatar.png';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../db/firebase';
import { useHandleCookies } from '../../utils/Cookies';

const Login = () => {
  const { setCookieValue } = useHandleCookies();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.get('email'),
        data.get('password')
      );

      const user = userCredential.user;
      if (user) {
        // Send info to the server for login
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.get('email'), 
            uid: user.uid
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setCookieValue('token', data.token, '/');
          localStorage.setItem('user', JSON.stringify(data.user));
          login();
          navigate('/');
        } else {
          console.error('Login failed');
        }
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
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
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ padding: '1rem' }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
          >
            Welcome
          </Typography>
          <Typography variant="body1">
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
              sx={{ margin: '1rem 0' }}
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
            <Card>
              <CardMedia
                component="img"
                image={loginAvatar}
                alt="login avatar"
                sx={{
                  borderRadius: '10px',
                  maxWidth: '500px',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  pointerEvents: 'none',
                  userSelect: 'none',
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

export default Login;
