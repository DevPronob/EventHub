import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_E8lsl2_h6jWFBUCsM5CoqvB2_XhQ4vM",
  authDomain: "odysse-1586b.firebaseapp.com",
  projectId: "odysse-1586b",
  storageBucket: "odysse-1586b.firebasestorage.app",
  messagingSenderId: "696231177963",
  appId: "1:696231177963:web:f47ed38f56033f223918ae",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();