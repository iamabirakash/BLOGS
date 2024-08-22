// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZJAbCEIPFMkWrrUIKLMv9FXYpM9Imu8",
  authDomain: "blogs-17ce9.firebaseapp.com",
  projectId: "blogs-17ce9",
  storageBucket: "blogs-17ce9.appspot.com",
  messagingSenderId: "279863151315",
  appId: "1:279863151315:web:a4cd533495ce3e41a86226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};