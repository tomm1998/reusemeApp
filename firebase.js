import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIDB2hC1rmO0WJT6cZaixgLO66SK28Ddo",
    authDomain: "reusemeapp.firebaseapp.com",
    projectId: "reusemeapp",
    storageBucket: "reusemeapp.appspot.com",
    messagingSenderId: "471626456124",
    appId: "1:471626456124:web:4282aea8f8f8d0ea8ef739"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    auth,
    db
  }