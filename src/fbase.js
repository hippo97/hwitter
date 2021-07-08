import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCcio-IQA8Pp-JbOje7WIW2INuoeWfdX2A",
    authDomain: "nwitter-e76d0.firebaseapp.com",
    projectId: "nwitter-e76d0",
    storageBucket: "nwitter-e76d0.appspot.com",
    messagingSenderId: "677084058583",
    appId: "1:677084058583:web:ad4dfba9b2919ee0acf192"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();