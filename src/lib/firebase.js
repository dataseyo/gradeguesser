import Firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/firestore';
import { seedDatabase } from "../seed"

const firebaseConfig = {
    apiKey: "AIzaSyBXL24FWjm4QdZDzMKr3jddJawNFqJaQcw",
    authDomain: "gradeguesser-9f091.firebaseapp.com",
    projectId: "gradeguesser-9f091",
    storageBucket: "gradeguesser-9f091.appspot.com",
    messagingSenderId: "586667429786",
    appId: "1:586667429786:web:5d2f04ae26e28e9675f423",
    measurementId: "G-2DYDCE7RJ3"
  };



  const db = app.firestore()
  const auth = app.auth()
  
  const firebase = Firebase.initializeApp(app)
  const { FieldValue } = window.app.firestore;

  seedDatabase(firebase);


  export { FieldValue, firebase }