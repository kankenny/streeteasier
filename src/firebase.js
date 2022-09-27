// Importing functions from packages
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// Boilerplate API setup
const firebaseConfig = {
  apiKey: "AIzaSyCtaRp_JJe4Nc8B_nHHFvWy4nv6z1s3ZnA",
  authDomain: "streeteasier-a5fbc.firebaseapp.com",
  projectId: "streeteasier-a5fbc",
  storageBucket: "streeteasier-a5fbc.appspot.com",
  messagingSenderId: "33964921995",
  appId: "1:33964921995:web:34773d68df6fa25a1ab08e",
  measurementId: "G-VN150N30XH"
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exported our variables so that they can be accessed from other files.
export const db = getFirestore(app);

export const auth = getAuth(app);