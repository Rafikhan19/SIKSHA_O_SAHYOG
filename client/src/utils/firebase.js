import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCa2LAfm3hrbpq-5Xz9R6pMSugPaXs9R80',
  authDomain: 'hkproject-65c20.firebaseapp.com',
  projectId: 'hkproject-65c20',
  storageBucket: 'hkproject-65c20.appspot.com',
  messagingSenderId: '512695836704',
  appId: '1:512695836704:web:a2adb6a85f62f22a081c45'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, createUserWithEmailAndPassword, db, signInWithEmailAndPassword };
