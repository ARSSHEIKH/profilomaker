import firebase from 'firebase';
const config = {
  apiKey: process.env.REACT_APP_DB_APIKEY,
  authDomain: process.env.REACT_APP_DB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_DB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DB_APP_ID,
  measurementId: process.env.REACT_APP_DB_MEASUREMENT_ID
};
export const firebaseConfig = firebase.initializeApp(config);