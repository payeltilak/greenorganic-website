// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMX9dk7q1877_ufSJS9y-hYrvptVRLZY",
  authDomain: "greenorganic-fruits-vegitable.firebaseapp.com",
  projectId: "greenorganic-fruits-vegitable",
  storageBucket: "greenorganic-fruits-vegitable.appspot.com",
  messagingSenderId: "988213838452",
  appId: "1:988213838452:web:0ef1eafedc30e0e910c721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;