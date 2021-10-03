import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";



const app = firebase.initializeApp({
  apiKey: "AIzaSyARmZsN6eOC7ExNyEZnwJbtpt_nyz8Di8A",
  authDomain: "stock2-f7db9.firebaseapp.com",
  projectId: "stock2-f7db9",
  storageBucket: "stock2-f7db9.appspot.com",
  messagingSenderId: "593669150140",
  appId: "1:593669150140:web:2210a7c5e96b93f7fa07b9"
  });

  console.log("ok2")
  export const db =  getFirestore()

console.log(db)
console.log(collection)

    
  export const auth = app.auth()

  export default db 