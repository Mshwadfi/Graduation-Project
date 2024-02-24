// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore function

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrNcPbU7a2ET1gi6DP4owXArrPaRucVs8",
    authDomain: "quiz-app-848e1.firebaseapp.com",
    projectId: "quiz-app-848e1",
    storageBucket: "quiz-app-848e1.appspot.com",
    messagingSenderId: "1087427573629",
    appId: "1:1087427573629:web:4dcfc3beba0d424654fe14",
    measurementId: "G-ZHZ0T4EGJ8"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get authentication and firestore instances
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; // Export auth and firestore
export default app;
