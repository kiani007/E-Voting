import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, reload, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      const token = localStorage.getItem('token');
      if ( user && token ) {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');

      } else {
        await signOut(auth);
        setLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        setError('User not logged in');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const login = async() => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      }
    } catch (error) {
      await signOut(auth);
      setError(error);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      // Handle login errors here
  }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      setLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
      setError(error);
      setLoading(false);
      // Handle logout errors here
    }
  };

 return (
  <AuthContext.Provider value={{ loggedIn, login, logout, loading }}>
     {loading ? <Loader type={'circular'} /> :
       <Box>
         {error && <Alert severity="error">{error.message}</Alert>}
         {children}
      </Box>
     }
     
  </AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);
