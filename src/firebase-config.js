// Importing functions from packages
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Boilerplate API setup
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectID,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.messagingSenderID,
  appId: process.env.appID,
  measurementId: process.env.measurementID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exported so our DB can be accessed from other files.
export const db = getFirestore(app);
