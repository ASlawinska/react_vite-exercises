import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkQ65_FcDh0HZBulrZ49RPZp4LlgSYKAI",
  authDomain: "viteprojectauth.firebaseapp.com",
  projectId: "viteprojectauth",
  storageBucket: "viteprojectauth.firebasestorage.app",
  messagingSenderId: "6678114277",
  appId: "1:6678114277:web:79d38632ec303adab0090c",
  measurementId: "G-F8D7YH00SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
