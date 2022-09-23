import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdfc7IGQSeTXBxY_PER9tQdwAJRzasEyk",
  authDomain: "react-form-firebase-f8480.firebaseapp.com",
  projectId: "react-form-firebase-f8480",
  storageBucket: "react-form-firebase-f8480.appspot.com",
  messagingSenderId: "539167187892",
  appId: "1:539167187892:web:7f1df53ce9d73b6b5248e1",
});

var db = firebaseApp.firestore();

export { db };
