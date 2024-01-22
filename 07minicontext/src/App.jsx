import Login from "./Componets/Login"
import Profile from "./Componets/Profile"
import UserContextProvider from "./Context/ContextProvider"

function App() {
  
  

  return (
    <UserContextProvider>
    <h1>react with context api</h1>
    <Login/>
    <Profile/>


     </UserContextProvider>
  )
}

export default App
