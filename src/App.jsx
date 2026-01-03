import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  const [sidebar,setsidebar]= useState(true);
  const setSidebarFun = (value)=>{
    setsidebar(value)
  }
 return(<div className='bg-black text-white w-full min-h-screen'>
  <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar}/>
  <Home sidebar={sidebar}/>
  </div>
 )
}

export default App
