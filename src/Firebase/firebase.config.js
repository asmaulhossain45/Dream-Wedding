// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVWcHDLgby6GZ0eR3JS6SzGPrWNIULVlE",
  authDomain: "dream-wedding-asmaul-hossain.firebaseapp.com",
  projectId: "dream-wedding-asmaul-hossain",
  storageBucket: "dream-wedding-asmaul-hossain.appspot.com",
  messagingSenderId: "633482401839",
  appId: "1:633482401839:web:0b0d1742a13c679c614eda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;