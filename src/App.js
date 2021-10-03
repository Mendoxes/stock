
import './App.css';
import Hero from "./Hero"
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [superx, setSuperx]=useState(true)
  return (
    <div className="App">
   {superx&&<Hero superx={superx}></Hero>}
   
    </div>
  );
}

export default App;
