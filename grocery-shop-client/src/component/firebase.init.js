import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8y_i5EUzCxljPWu8nx8oxWkPf3O6JmIc",
  authDomain: "grocery-shop-4df4d.firebaseapp.com",
  projectId: "grocery-shop-4df4d",
  storageBucket: "grocery-shop-4df4d.appspot.com",
  messagingSenderId: "1098945474260",
  appId: "1:1098945474260:web:ff1190cfb116b4843f9541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export default auth;