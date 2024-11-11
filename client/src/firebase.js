// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3a841.firebaseapp.com",
  projectId: "mern-estate-3a841",
  storageBucket: "mern-estate-3a841.appspot.com",
  messagingSenderId: "436173274481",
  appId: "1:436173274481:web:367cac10d2a61ff2cfcad0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);