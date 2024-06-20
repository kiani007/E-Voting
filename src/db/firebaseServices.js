import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userToken');
 };
  
const login = async (email, password) => {
    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        return user;
    } catch (error) {
        console.error('Login error:', error);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userToken');
        return error;
    }
  };

const logout = async () => {
    try {
        await handleLogout();
    } catch (error) {
        console.error('Logout error:', error);
        return error;
    }
  };

const signupFirebae = async (email, password) => {
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        return user;
    } catch (error) {
        console.error('Signup error:', error);
        return error;
    }
  };

export const firebaseServie = { login, logout, signupFirebae };