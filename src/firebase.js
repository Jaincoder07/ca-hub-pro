// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv1f44t61b8r11PUC3E0UtwxzwtlVOIOQ",
  authDomain: "ca-hub-pro.firebaseapp.com",
  projectId: "ca-hub-pro",
  storageBucket: "ca-hub-pro.firebasestorage.app",
  messagingSenderId: "72722363355",
  appId: "1:72722363355:web:f4f284624eb96ab59dadfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
