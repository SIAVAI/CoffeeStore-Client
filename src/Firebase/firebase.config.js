// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKgV6LE0vpgxYsEKxkJ9TVZuZ23emBFI8",
  authDomain: "coffee-store-c227c.firebaseapp.com",
  projectId: "coffee-store-c227c",
  storageBucket: "coffee-store-c227c.appspot.com",
  messagingSenderId: "603220486199",
  appId: "1:603220486199:web:d916411a3eec6f1c3177b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;