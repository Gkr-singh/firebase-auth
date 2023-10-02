import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXxSxTHJ8xDt3ddYCxiVVT2LPGoMO4o74",
  authDomain: "react-firebase-auth-beb52.firebaseapp.com",
  projectId: "react-firebase-auth-beb52",
  storageBucket: "react-firebase-auth-beb52.appspot.com",
  messagingSenderId: "848132944342",
  appId: "1:848132944342:web:d1cdb2719409d1a4f3b477",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
