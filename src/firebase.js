import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm6UYG_-QDDLfPgp8SwDapXkVKmxdv7VE",
  authDomain: "example-6f581.firebaseapp.com",
  projectId: "example-6f581",
  storageBucket: "example-6f581.firebasestorage.app",
  messagingSenderId: "69669062444",
  appId: "1:69669062444:web:a1d2b19625d0784e524e89",
  measurementId: "G-LZCM2CC1W8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };