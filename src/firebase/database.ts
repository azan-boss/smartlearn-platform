// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeBAIiff83b0M19ObWYteFKZOta04YxH0",
  authDomain: "refi-c5268.firebaseapp.com",
  projectId: "refi-c5268",
  storageBucket: "refi-c5268.firebasestorage.app",
  messagingSenderId: "375877482581",
  appId: "1:375877482581:web:e8f330f570463bf61dbcdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };