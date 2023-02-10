import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjAEDXAcIw53-jZaDALzBW3ZqJmFB2In8",
  authDomain: "consumption-2dbcb.firebaseapp.com",
  projectId: "consumption-2dbcb",
  storageBucket: "consumption-2dbcb.appspot.com",
  messagingSenderId: "354685606827",
  appId: "1:354685606827:web:a5a3fac3c8b8689a7310ee",
};

export default firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
