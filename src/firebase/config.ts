// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1IKFHXQ4IfkdRcR7CNP3wKH8uDubzbuQ",
  authDomain: "parqueavestruz-1efe1.firebaseapp.com",
  projectId: "parqueavestruz-1efe1",
  storageBucket: "parqueavestruz-1efe1.firebasestorage.app",
  messagingSenderId: "281913729137",
  appId: "1:281913729137:web:286515ba845946d6567bd0",
  measurementId: "G-5EE0H2PGZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);