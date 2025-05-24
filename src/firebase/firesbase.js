// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjIES-WqAI68xOV1gBDG_1Nq4xHaV2TOs",
  authDomain: "studentmanagementsystem-1602e.firebaseapp.com",
  projectId: "studentmanagementsystem-1602e",
  storageBucket: "studentmanagementsystem-1602e.firebasestorage.app",
  messagingSenderId: "15983750244",
  appId: "1:15983750244:web:271da186d9ebd13396c371",
  measurementId: "G-X7YS0S279C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);