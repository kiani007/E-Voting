import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Loader } from '../components/Loader';
import { Alert, Box } from '@mui/material';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken(true);
          localStorage.setItem('token', token);
          localStorage.setItem('isLoggedIn', 'true');
          setLoggedIn(true);
          setError(null);
        } catch (tokenError) {
          console.error('Token error:', tokenError);
          await handleLogout();
        }
      } else {
        await handleLogout();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    setLoggedIn(false);
    setError('User not logged in');
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const token = await user.getIdToken(true);
      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', 'true');
      setLoggedIn(true);
      setError(null);
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials.');
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await handleLogout();
    } catch (error) {
      console.error('Logout error:', error);
      setError('Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, loading }}>
      {loading ? (
        <Loader type={'circular'} />
      ) : (
        <Box>
          {error && <Alert severity="error">{error}</Alert>}
          {children}
        </Box>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
