// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdK1mAPogpdKaCfH9B0FaDN_fWLrVF0GM",
  authDomain: "cozy-life-style.firebaseapp.com",
  projectId: "cozy-life-style",
  storageBucket: "cozy-life-style.appspot.com",
  messagingSenderId: "585947209874",
  appId: "1:585947209874:web:02466e02ad3df6ed56464b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
