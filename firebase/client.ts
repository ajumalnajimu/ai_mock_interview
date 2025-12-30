// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDZvdUFkcnxyWHrwtD5bpsXKjMBty8l3e8",
  authDomain: "prepwise-4f092.firebaseapp.com",
  projectId: "prepwise-4f092",
  storageBucket: "prepwise-4f092.firebasestorage.app",
  messagingSenderId: "284450545434",
  appId: "1:284450545434:web:f09084e3d8fad56b82d6a3",
  measurementId: "G-55CHW34Y5M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);