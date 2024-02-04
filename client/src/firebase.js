// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d7955.firebaseapp.com",
  projectId: "mern-blog-d7955",
  storageBucket: "mern-blog-d7955.appspot.com",
  messagingSenderId: "163080118326",
  appId: "1:163080118326:web:f43a437812749d4008f897"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);