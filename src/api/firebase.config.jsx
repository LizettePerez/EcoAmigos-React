// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfsjEfow_cNF4Q6Y8w4qV6F4FZivrSo-o",
  authDomain: "ecoamigos-b27b7.firebaseapp.com",
  projectId: "ecoamigos-b27b7",
  storageBucket: "ecoamigos-b27b7.appspot.com",
  messagingSenderId: "733853918959",
  appId: "1:733853918959:web:414181453ad616d2af5d1a",
};

const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");


export { auth, provider };