import React from 'react'
import {useState} from "react"
import db from './firebase.config';
import { increment, decrement,collection, doc, setDoc,getDocs, getDoc, query, where, updateDoc,arrayUnion} from "firebase/firestore"; 


export default function Specific(v,arr) {

const [name, setName]=useState("")

async function doit (){
    const employeeRef = collection(db, "Numbers");

    // await setDoc(doc(employeeRef, "Numbers"), {
    //     partC:1212});}


    await updateDoc(doc(employeeRef, "Numbers"), {
        
        partC:part, quantC: arrayUnion(22), loC: arrayUnion("A001")

        
    
    })
console.log(part)
}

console.log(arr)
let part =[]
    async function oka (e){
     
        
      const q = query(collection(db, "Numbers"))
   
      const arrayvar=[1]
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {

        console.log(doc.data().partC +"parrttt C")
        part = doc.data().partC;
        console.log(part)
        return part
    }
    )
}
    
        

    return (
        <div>
            <button onClick={oka}> okaaa</button>
      
        </div>
    )
}
