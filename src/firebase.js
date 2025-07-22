import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBW7CUSUTee3uSBDBcSNEmkBXJ5sp2T6Iw",
    authDomain: "my-wine-project-144.firebaseapp.com",
    projectId: "my-wine-project-144",
    storageBucket: "my-wine-project-144.appspot.com", 
    messagingSenderId: "1036097788315",
    appId: "1:1036097788315:web:18e6ad0d22826a420aa93e"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
