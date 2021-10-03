import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyARmZsN6eOC7ExNyEZnwJbtpt_nyz8Di8A",
  authDomain: "stock2-f7db9.firebaseapp.com",
  projectId: "stock2-f7db9",
  storageBucket: "stock2-f7db9.appspot.com",
  messagingSenderId: "593669150140",
  appId: "1:593669150140:web:2210a7c5e96b93f7fa07b9"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;