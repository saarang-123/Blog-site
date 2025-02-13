
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAE9eawqQL46nbfquM4GvCSI6uXQTYHkiI",
    authDomain: "data-ce5b0.firebaseapp.com",
    projectId: "data-ce5b0",
    storageBucket: "data-ce5b0.firebasestorage.app",
    messagingSenderId: "370067529601",
    appId: "1:370067529601:web:87f5eb2886d0419de09280",
    measurementId: "G-09GVBQLPJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setDoc, doc };

