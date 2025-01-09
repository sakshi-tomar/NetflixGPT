// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqa4HJDp0DP0c2YwFehcjQkDUspBxiPi8",
  authDomain: "netflixgpt-9d899.firebaseapp.com",
  projectId: "netflixgpt-9d899",
  storageBucket: "netflixgpt-9d899.firebasestorage.app",
  messagingSenderId: "371134337236",
  appId: "1:371134337236:web:c55c0aea4e94982138eb41",
  measurementId: "G-HDWE7QNL0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();