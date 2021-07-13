import firebase from 'firebase';
const config = {
  // apiKey: process.env.REACT_APP_DB_APIKEY,
  // authDomain: process.env.REACT_APP_DB_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DB_URL,
  // projectId: process.env.REACT_APP_DB_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_DB_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_DB_APP_ID,
  // measurementId: process.env.REACT_APP_DB_MEASUREMENT_ID
  apiKey: "AIzaSyCfV3qpPnMWCSf8VN3Il_WUImTZbxUpqzE",
  authDomain: "profilomaker-5a21c.firebaseapp.com",
  databaseURL: "https://profilomaker-5a21c-default-rtdb.firebaseio.com",
  projectId: "profilomaker-5a21c",
  storageBucket: "profilomaker-5a21c.appspot.com",
  messagingSenderId: "52811685415",
  appId: "1:52811685415:web:bd4a71bff0bcca26c2b802",
  measurementId: "G-MDXQDQWTVR"
};
export const firebaseConfig = firebase.initializeApp(config);