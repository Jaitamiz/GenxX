import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUkTQcKAwz_UsYqy4luBKBkfahj8_WhBA",
  authDomain: "genx-1ce51.firebaseapp.com",
  databaseURL: "https://genx-1ce51-default-rtdb.firebaseio.com",
  projectId: "genx-1ce51",
  storageBucket: "genx-1ce51.firebasestorage.appspot.com",
  messagingSenderId: "334039413445",
  appId: "1:334039413445:web:d01e8f936b0b1aedeb76ac",
  measurementId: "G-9QHHLPSXTB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
