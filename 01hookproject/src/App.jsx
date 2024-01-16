import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter,setcounter] =useState(14)
  // let counter=14
  const addValue=()=>{
    // console.log("value added",Math.random());
    
   
    // counter=counter+1;
    setcounter(prevcounter=>prevcounter+1)
    setcounter(prevcounter=>prevcounter+1)
    setcounter(prevcounter=>prevcounter+1)
    setcounter(prevcounter=>prevcounter+1)
    // console.log("clicked",counter);
  }
  const removeValue=()=>{
    setcounter(counter-1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={addValue}>add value{counter}</button>
    <br />
    <button
    onClick={removeValue} 
    >remove value{counter}</button>
    <p>footer{counter}</p>
     
    </>
  )
}

export default App
