import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import Footer from './componets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
      </>
  )
}

export default App
