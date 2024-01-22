import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import Contact from './componets/Contact/Contact.jsx'
import User from './componets/User/User.jsx'
import Github ,{githubinfoLoader}from './componets/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>,
//       },
//       {
//         path:'about',
//         element:<About/>

//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]

//   }

// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about'element={<About/>}></Route>
      <Route path='contact'element={<Contact/>}></Route>
      <Route path='user/:userid'element={<User/>}></Route>
      <Route
      loader={(githubinfoLoader)=>{

      }}
      
      path='Github'element={<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
