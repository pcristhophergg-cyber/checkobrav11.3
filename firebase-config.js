// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAhs794wtsuJJlzlsEn1-4vS4tANIitfRY",
  authDomain: "check-obra-c95e5.firebaseapp.com",
  projectId: "check-obra-c95e5",
  storageBucket: "check-obra-c95e5.firebasestorage.app",
  messagingSenderId: "494575819536",
  appId: "1:494575819536:web:fd4fd5de5b1fcfaa79a395"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp
};
