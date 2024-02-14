import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6Y9WnBFmmGBpzWUcxPEnZgwKv8T_JV8w",
  authDomain: "blog-5fe76.firebaseapp.com",
  projectId: "blog-5fe76",
  storageBucket: "blog-5fe76.appspot.com",
  messagingSenderId: "328677362257",
  appId: "1:328677362257:web:e9271647aa8e118a4ec670",
  measurementId: "G-GL8N286JZL",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
