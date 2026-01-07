import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Video from './Components/Video'
import {Route,Routes} from 'react-router-dom'
import Profile from './Components/Profile'
import Videoupload from './Components/Videoupload'
import Login from './Components/Login'
import Signup from './Components/Signup'
function App() {
  const [sidebar,setsidebar]= useState(true);
  const setSidebarFun = (value)=>{
    setsidebar(value)
  }
 return(<div className='bg-black text-white w-full min-h-screen'>
  <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar}/>
  <Routes>
    <Route path='/' element={<Home sidebar={sidebar} />}/>
    <Route path='/watch/:id' element={<Video />} />
    <Route path='/user/:id' element={<Profile sidebar={sidebar}/>} />
    <Route path='/:id/upload' element={<Videoupload />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
  </Routes>
  
  </div>
 )
}

export default App
