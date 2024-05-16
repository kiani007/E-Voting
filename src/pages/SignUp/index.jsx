import React, { useState } from 'react';
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
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import voteAvatar from '../../assets/voteAvatar.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../../db/firebase';
import { useAuth } from '../../Auth';
import { useHandleCookies } from '../../utils/Cookies';

const Signup = () => {
  const { setCookieValue } = useHandleCookies();
  const db = getDatabase();
  const { login } = useAuth();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    number: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { first_name, last_name, email, password, number } = formData;
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user.uid);

      await set(ref(db, `users/${user.uid}`), {
        first_name,
        last_name,
        email,
        number,
      });

      if (user.uid) {
        const response = await fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            number,
            uid: user.uid,
          }),
        });

        if (response.ok) {
          const responseUser = await response.json();
          console.log(responseUser);
          localStorage.setItem('user', JSON.stringify(responseUser.user));
          setCookieValue('token', responseUser.token, '/');
          login();
          navigate('/'); // Redirect to a different page after successful signup
        } else {
          alert('Sign up failed');
        }
      }
    } catch (error) {
      console.error('Sign up failed:', error.message);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        mt: 2,
        backgroundColor: '#E9ECEF',
        padding: '2rem',
        mb: 8,
        borderRadius: '1rem',
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
            component="h1"
            variant="h3"
            sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
          >
            Welcome
          </Typography>
          <Typography variant="body1">Create an account</Typography>
          <form
            style={{ width: '100%', marginTop: '1rem' }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  value={formData.last_name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="number"
                  label="Phone Number"
                  type="tel"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
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
            }}
          >
            <Card title="sign up">
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

export default Signup;
