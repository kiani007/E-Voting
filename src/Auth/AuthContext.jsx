import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, reload, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {useHandleCookies} from '../utils/Cookies'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { removeCookieValue } = useHandleCookies('token');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const login = () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email) {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors here
  }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      removeCookieValue('token');
      setLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout errors here
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
