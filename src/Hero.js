import React from 'react'
import {useState,useEffect} from "react"
import Specific from './Specific';
import { Button, Card } from 'react-bootstrap';
import db from './firebase.config';
import { increment, decrement,collection, doc, setDoc,getDocs, getDoc, query, where, updateDoc,arrayUnion} from "firebase/firestore"; 
import { useFormik } from 'formik';


export default function Hero() {

const [state, setState] =useState([false,""]);
const [spec, setSpec]= useState([false, ""])
const [ulti,setUlti]=useState("","")
const [inde, setInde]=useState([false,""])
const [arr, setArr]=useState([])
const [exp, setExp]= useState("")
const [arr2, setArr2]=useState([]) //parts
const [arr3, setArr3]=useState([]) // loc
const [arr4, setArr4]=useState([]) // quant
let part =[]


const formik = useFormik({
    initialValues: {
      number4: "",
      number0:"",
      number1:"",
      number2:"",
      number3:""
    },
    onSubmit: values => {
        console.log(values)
      alert(JSON.stringify(values, null, 2));
      okas()
      console.log(part)
      for (let i = 0 ; i<=3;i++){
          console.log(part +"nono")
      part.push(arr2[i])}
      console.log(part +"heyhey")
      doit()
      console.log(arr2)
    },
  });

const mail = ["email0","email1","email2","email3","email4"]




const expe = [];
const singleL = [];

useEffect(() => {
  setArr([])
}, [])

const stock1={

 fullname: function(){

       return  this.firstName + " "+ this.secondName;
    }
}


const stock2 ={

    firstName:"A001",
    secondName: [12126,12127], 
}
const stock3 ={

    firstName:"A002",
    secondName: [12123],
}
const stock4 ={

    firstName:"A003",
    secondName:[63826]
}

const stock5 ={

    firstName:"A004",
    secondName: [12892],
}


const stock6 ={

    firstName:"B001",
    secondName: [92767],
}


const stock7 ={

    firstName:"A-01-A1",
    secondName: [12765],
}



const yy = 2;

// eval(“xyz(” + i + “)”);

console.log(stock6.firstName[0])
for (let i = 2 ; i<=7 ;i++){
 
   if(eval("stock" + i).firstName.includes(state[1])){


// console.log(spec[1].length)

expe.push(<p onClick={()=>setSpec([true,eval("stock" +i).secondName])} >{stock1.fullname.call(eval("stock" + i))}</p>);

// console.log(expe)
}
// console.log(x)
    // console.log("stock" + i)
 


console.log(stock1.fullname.call(eval("stock" + i)))



}

singleL.push(...spec[1])
// console.log(singleL)

const Ala = function (){

        return <div>{expe} </div>
    }

    
    const Results = function (){
        
for (let i = 0 ; i <=singleL.length-1; i++){
// console.log(singleL[0].length)
   singleL[i] = <Card>{singleL[i]}</Card>
}
        return <div>{singleL}</div>
    }


    let person1=[]
       let locations =[]
       async function ok (){
           let m = []
          let v=[]
         const q = query(collection(db, "locations"))
        //  , where("contract", "==", true));
         const arrayvar=[1]
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
       
            for (let i=0 ; i<=4-1;i++){
             v.push(doc.data().parts[i])
console.log(v+"v")
console.log("fhdjsfdsjkfdgkfdgkfghfdsgfsdjhgfsdjhsdgfjgfsdj")
            }

//    console.log(...doc.data().parts)
//    console.log(db)


//    person1.push(new Business(doc.data().name,doc.data().email,doc.data().holidayH,doc.data().phone
//    ,doc.data().position,doc.data().time,doc.data().country))
//    m.push(doc.data().name)
//    locations.push(doc.data().locations)
//    console.log(locations)
         }
         )
    
    //   console.log(person1)
//         for (let i = 0 ; i<=9; i++){
// console.log(i +"for")
       
//         }
          
       
       }



       let v=[]  //part number
       let lo =[] // lokacja 
       async function oka (e){
        let m = []
       setArr([])
       let simp = ["A","B","C","D","E"];

v=[];

      const q = query(collection(db, "locations"))
   
      const arrayvar=[1]
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {

        // console.log(doc.data().partC[0] +"parrttt C")
    
         for (let i=0 ; i<=4-1;i++){
             for (let x = 0; x<=simp.length -1 ; x++){


             
             if (e.target.innerHTML === simp[x]){
                
             if(doc.data().loc[i].includes(simp[x])){ 
                function shortcut(){

                  


                    for (let i=0 ; i<=doc.data().parts.length - 1; i++){
setArr2(old2 =>[...old2,doc.data().parts[i]])
setArr3(old2 =>[...old2,doc.data().loc])
setArr4(old2 =>[...old2,doc.data().number[i]])
console.log(arr2)
                        setArr(old =>[...old,<div><p className="part"> {doc.data().parts[i]}</p>
   
                        
   {/* <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email1">Email Address</label>
       <input
         id="email"
         name="email1"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
            </form>             */}
                        
                        </div>])
                    } 

                    setInde([true,doc.data().parts[0]]) //irelavent but important
                }
          v.push(<div className="item" onClick={shortcut}>{doc.data().loc}</div>)
         
}}}


         }
        
      }
    
      )



 setInde([false, ""])
       setUlti(v)
    return v
    }

console.log(inde)


// async function ok (){

// const employeeRef = collection(db, "locations");
// console.log("em?")
// for (let i=1; i<=20 ; i++){
//     let k ;
//     if ( i<=9){k = "00"}
//     else if (i<=99){k="0"}
//     else {k=""}
// await setDoc(doc(employeeRef, ("A" +k+ i)), {
//   loc:("A" +k+ i),   parts: [(1212 +i), 2212+i, 3212+i, 4521+i], number: [2*i,3*i,4*i,5*i] });

//     await setDoc(doc(employeeRef, ("B" +k+ i)), {
//       loc:("B" +k+ i),  parts: [(1312 +i), 2512+i, 3112+i, 4221+i], number: [2*i,3*i,4*i,5*i] });
//         await setDoc(doc(employeeRef, ("D" +k+ i)), {
//           loc:("D" +k+ i),  parts: [(1212 +i), 2212+i, 3212+i, 4521+i], number: [2*i,3*i,4*i,5*i] });

//             await setDoc(doc(employeeRef, ("E" +k+ i)), {
//               loc:("E" +k+ i),  parts: [(1312 +i), 2512+i, 3112+i, 4221+i], number: [2*i,3*i,4*i,5*i] });
        
//         await setDoc(doc(employeeRef, ("C" +k+ i)), {
//          loc:("C" +k+ i),   parts: [(1312 +i), 2512+i, 3112+i, 4221+i], number: [2*i,3*i,4*i,5*i] })};
    
    
    
        //     await setDoc(doc(employeeRef, "Numbers"), {
        // partC: 12123, locationC:"A001"});
//         // await setDoc(doc(employeeRef, "MB"), {
//         //     name: "Maja Bizior", position: "werehouse operative", country: "Poland",
//         //     contract: false, holidayH: 0,email:"maja.bizior@gmail.com", phone: "07236203310",
//         //     time: 2020});
//         //     await setDoc(doc(employeeRef, "AE"), {
//         //         name: "Abby eklerek", position: "werehouse operative", country: "English",
//         //         contract: true, holidayH: 160,email:"Abby.ek@gmail.com", phone: "07336203310",
//         //         time: 2018});
// }









// const Bulk = function(){
//     if (inde === true){
//     return  setExp(<Specific></Specific>)}
//     else {return setExp(<div>ok</div>)}
// }



        // await updateDoc(employeeRef, "Numbers", {
        //     partC: arrayUnion(12125)
        // })
    
    
    

function cleanArr(){
    setState([true,"B"])

}

// function tr(e){
// if (e.target.innerHTML === "B"){
//     setState([true,"B"])
//     else if(e.target.innerHTML === "A"){

//     }
// } 
// }
console.log(inde)













async function okas (e){
     
        
    const q = query(collection(db, "Numbers"))
 
    const arrayvar=[1]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

    //   console.log(doc.data().partC +"parrttt C")


    //   for (let i = 0; i<=doc.data().partC.length-1 ;i++){
    //   setArr2(old2 =>[...old2,doc.data().partC[i]])}
    //   console.log(part +"parrrrttt")
      return part
  }
  )
}









async function doit (){
    const employeeRef = collection(db, "Numbers");



    const q = query(collection(db, "Numbers"))
 
    const arrayvar=[1]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

      console.log(doc.data().partC +"parrttt C")
    
    
    
    })




    // await setDoc(doc(employeeRef, "Numbers"), {
    //     partC:1212});}


    await updateDoc(doc(employeeRef, "Numbers"), {
        
        partC:arrayUnion(...arr2 ,{...arr4}), quantC: arrayUnion(...arr4), loC: arrayUnion(...arr3)

        
    
    })
console.log(part +"dooo itt part")

}

console.log(arr)

 

























    return (
        <div>
        {!spec[0]&&<div><button onClick={oka}>A</button>
            {/* <button onClick={()=>setState([true,"A"])}>A</button> */}
         <button onClick={oka}>B</button>
         <button onClick={oka}>C</button>
         <button onClick={oka}>D</button>
         <button onClick={oka}>E</button></div>}
         {/* {spec[0]&&<div>ok</div>} */}
         {state[0]&&!spec[0]&&<Ala />}

    {spec&&<Results />}
  {!inde[0]&&<div className="main">{ulti}</div>}
    {/* {inde&&inde} */}
    {/* {inde&&arr} */}
  {inde[0]&&<div className="forms"> <form onSubmit={formik.handleSubmit}>
       <label htmlFor="number0">{arr[0]}</label>
       <input
         id="number0"
         name="number0"
         type="number0"
         onChange={formik.handleChange}
         value={formik.values.number0}
       />
 
      
     </form>

     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="number1">{arr[1]}</label>
       <input
         id="number1"
         name="number1"
         type="number1"
         onChange={formik.handleChange}
         value={formik.values.number1}
       />
        
</form>

<form onSubmit={formik.handleSubmit}>
       <label htmlFor="number2">{arr[2]}</label>
       <input
         id="number2"
         name="number2"
         type="number2"
         onChange={formik.handleChange}
         value={formik.values.number2}
       />
        

</form>

<form onSubmit={formik.handleSubmit}>
       <label htmlFor="number3">{arr[3]}</label>
       <input
         id="number3"
         name="number3"
         type="number3"
         onChange={formik.handleChange}
         value={formik.values.number3}
       />
 
       <button type="submit">Submit</button>
     </form>
   </div>}
         <button onClick={()=>setSpec(false)}></button>
<button onClick={ok}>ok</button>
{/* <button  onClick={doit}>DOOOO ITT</button> */}

<Specific v={v} arr={[arr]}></Specific>
<button onClick={doit}> DOOOO ITTTTTT</button>
        </div>
    )
}
