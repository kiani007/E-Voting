import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA48-NO5iMBzfdPTjxXgRIqFAYf2N9k-9U',
  authDomain: 'e-voting-c0337.firebaseapp.com',
  projectId: 'e-voting-c0337',
  storageBucket: 'e-voting-c0337.appspot.com',
  messagingSenderId: '82901621287',
  appId: '1:82901621287:web:2c6bd7d73fa34565264c02',
  measurementId: 'G-ESWS5B55EB',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const db = getDatabase(firebaseApp);
export { auth, analytics, firebaseApp, db };
