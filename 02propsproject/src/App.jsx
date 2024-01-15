import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'



function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"happy",
    age:"23",
  }
  let newArr=[2,3,4,5]
  



  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>talwindcss</h1>
     <Card username="chai aur code" someObj={myobj} someArr={newArr} btnText="click me" />
     <Card username="happy" btnText="clickme"/>
    
      
     </>
  )
}

export default App
