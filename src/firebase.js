import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyCvCRBZVfatQBdSzkbxnx-E1Ib7DSUxMmw",
    authDomain: "firestore1-76d6c.firebaseapp.com",
    projectId: "firestore1-76d6c",
    storageBucket: "firestore1-76d6c.appspot.com",
    messagingSenderId: "1070283142312",
    appId: "1:1070283142312:web:701f58501df2eacc37fe9d"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);


  export const  db = fb.firestore()

