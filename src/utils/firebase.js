// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZhbY1BnvaPNFFOHGkPFMXBNEo_u5nq3Q",
  authDomain: "netflixgpt-65de7.firebaseapp.com",
  projectId: "netflixgpt-65de7",
  storageBucket: "netflixgpt-65de7.firebasestorage.app",
  messagingSenderId: "235691350498",
  appId: "1:235691350498:web:2d6e5216caa623b85201bb",
  measurementId: "G-2SWDNXHS99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();