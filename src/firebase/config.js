import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCmvRX6wD8l3JxAvYGy9JH9Vc4PUa1kJfY",
  authDomain: "shopswifly.firebaseapp.com",
  databaseURL: "https://shopswifly-default-rtdb.firebaseio.com",
  projectId: "shopswifly",
  storageBucket: "shopswifly.appspot.com",
  messagingSenderId: "577826937581",
  appId: "1:577826937581:web:e3f15c2a20f1b222b28ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app