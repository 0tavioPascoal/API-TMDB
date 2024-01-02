import { Outlet } from "react-router-dom"

//componets
import Navbar from "./Components/Navbar"

import './App.css'

function App() {
 

  return (
    <div className='App'>
    <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
