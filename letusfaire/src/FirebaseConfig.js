// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8eHMLBF73-AtPYF0BTssx5HfRSgFEtHU",
  authDomain: "let-us-faire.firebaseapp.com",
  projectId: "let-us-faire",
  storageBucket: "let-us-faire.appspot.com",
  messagingSenderId: "663012760330",
  appId: "1:663012760330:web:affa87551c304976e6f8f3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)

export const auth = getAuth(app);

