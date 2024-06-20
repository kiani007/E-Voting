import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Loader } from '../components/Loader';
import { Alert, Box } from '@mui/material';
import { firebaseServie } from '../db/firebaseServices';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { logout:logoutFirebase } = firebaseServie;
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const loginState = localStorage.getItem('isLoggedIn');
        if (loginState === 'true') {
          setLoggedIn(true);
        }
      } else {
        setLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userToken');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginApproved = async () => { 
    setLoggedIn(true);
  }

  const logout = async() => {
    const isLoggedOut = await logoutFirebase();
    setLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{loggedIn, logout, loading, loginApproved }}>
      {loading ? (
        <Loader type={'circular'} />
      ) : (
        <Box>
          {children}
        </Box>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);