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
  Alert,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import voteAvatar from '../../assets/voteAvatar.png';
import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../../db/firebase';
import { useAuth } from '../../Auth';
import { Loader } from '../../components/Loader';
import { signup } from '../../services/dataService';

const Signup = () => {
  const db = getDatabase();
  const { login, setLoggedIn } = useAuth();
  const [error, setError] = useState(null);
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
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Form validation
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password || !formData.number) {
      setError('All fields are required.');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Invalid email address.');
      return;
    }

    // Password validation
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      setLoading(true);
      const { first_name, last_name, email, password, number } = formData;
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user.uid) {
        await set(ref(db, `users/${user.uid}`), {
          first_name,
          last_name,
          email,
          number,
        });
        const response = await signup({
          first_name,
          last_name,
          email,
          number,
          uid: user.uid,
        });
        
        if (response.status === 200) {
          const responseUser = await response.user;
          localStorage.setItem('token', response.token);
          localStorage.setItem('isLoggedIn', true);
          setLoggedIn(true);
          navigate('/e-voting-system');
        } else {
          setLoading(false);
          setError('Sign up failed');
          deleteUser(user);
        }
      }
    } catch (error) {
      console.error('Sign up failed:', error.message);
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>  
      
    {isLoading && <Loader type={'circular'}/>}  
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
        {error  && <Alert severity="error">{error}</Alert>}

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
    </>
  );
};

export default Signup;
