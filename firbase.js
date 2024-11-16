// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLM6WWi5WVqWAy0zz-poC2QWEdjK4wzo",
  authDomain: "portfolio-a9260.firebaseapp.com",
  projectId: "portfolio-a9260",
  storageBucket: "portfolio-a9260.firebasestorage.app",
  messagingSenderId: "1063811854550",
  appId: "1:1063811854550:web:aebda627f4587e67599977",
  measurementId: "G-6WNQ224SK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);