// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNFYwQlF3CIXKnBwDj1jXCkph3AxUo_O4",
  authDomain: "coffee-store-app-c0c51.firebaseapp.com",
  projectId: "coffee-store-app-c0c51",
  storageBucket: "coffee-store-app-c0c51.firebasestorage.app",
  messagingSenderId: "653502500977",
  appId: "1:653502500977:web:ac09c0d3a3c19908e70bd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
