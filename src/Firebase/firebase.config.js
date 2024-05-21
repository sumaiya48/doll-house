// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaWk0bIgVFxO6Z-dtCU2P5sPskyiqdKu4",
  authDomain: "doll-house-dbd86.firebaseapp.com",
  projectId: "doll-house-dbd86",
  storageBucket: "doll-house-dbd86.appspot.com",
  messagingSenderId: "119667019427",
  appId: "1:119667019427:web:744cf9a959f45c85b07916",
  measurementId: "G-SGE6WPCERT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;