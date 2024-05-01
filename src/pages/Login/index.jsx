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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from '../../Auth';
useAuth;
const Index = () => {
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
    <Container component="main" maxWidth="xs">
      <div
        style={{
          marginTop: '8rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: 'primary.main', width: 150, height: 150 }}>
          <LockOutlinedIcon sx={{ fontSize: 50 }} />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginBottom: '1rem', fontWeight: 'bold' }}
        >
          Sign In
        </Typography>
        <Typography sx={{ marginBottom: '1rem' }}> Welcome Back! </Typography>
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
      </div>
    </Container>
  );
};

export default Index;
