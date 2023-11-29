// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkAiSpmbsUsPxImAum6CBpRCX3-G0btNk",
  authDomain: "vite-contactapp-befba.firebaseapp.com",
  projectId: "vite-contactapp-befba",
  storageBucket: "vite-contactapp-befba.appspot.com",
  messagingSenderId: "116682911418",
  appId: "1:116682911418:web:4c5074a9112fa86f7cdc83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);