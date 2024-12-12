import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNvqctL5xKfKepfGzpPCGWyOyfh2Nukfo",
  authDomain: "react-crud-86f9e.firebaseapp.com",
  projectId: "react-crud-86f9e",
  storageBucket: "react-crud-86f9e.firebasestorage.app",
  messagingSenderId: "1027579865706",
  appId: "1:1027579865706:web:1d355927ff9e408709b813",
  measurementId: "G-KDQRS7P0E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);