import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9oktWzsBtg7dp8CgfZ8wUm6oqF_unLCE",
  authDomain: "gallery-1738f.firebaseapp.com",
  projectId: "gallery-1738f",
  storageBucket: "gallery-1738f.appspot.com",
  messagingSenderId: "206703019575",
  appId: "1:206703019575:web:a2068dfb3ba8530c2121b2",
  measurementId: "G-M211DRQZSZ"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)