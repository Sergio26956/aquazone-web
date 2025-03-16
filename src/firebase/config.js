import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEuXgcsioqguloc2X6QR4NCPsc9sUIWKU",
  authDomain: "aquazoneweb-96100.firebaseapp.com",
  projectId: "aquazoneweb-96100",
  storageBucket: "aquazoneweb-96100.firebasestorage.app",
  messagingSenderId: "601142060945",
  appId: "1:601142060945:web:495745a3a90bb687805c30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
