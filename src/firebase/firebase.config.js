// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoJ0YPixDVbsaVYCrj1Vy0FBOHYA-gTs4",
  authDomain: "chef-recipe-fa671.firebaseapp.com",
  projectId: "chef-recipe-fa671",
  storageBucket: "chef-recipe-fa671.appspot.com",
  messagingSenderId: "46132625640",
  appId: "1:46132625640:web:13621f9847ec750482c95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;