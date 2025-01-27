// Firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv5m9SanK70BzDRwM3Kro7AwRHZhJD7FU",
    authDomain: "veda-3f3bb.firebaseapp.com",
    projectId: "veda-3f3bb",
    storageBucket: "veda-3f3bb.firebasestorage.app",
    messagingSenderId: "391464412154",
    appId: "1:391464412154:web:332e7e66af5f44f0d37a43",
    measurementId: "G-VL19TSMWXB"
  };

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

export { app, db, analytics };