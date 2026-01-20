import { useEffect, useState } from 'react'
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
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false); 
 // when window less than 800
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 800) { 
      setsidebar(false);          
      setIsMobile(true);
    } else {
      setsidebar(true);           
      setIsMobile(false);
    }
  }

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);  
  

  const setSidebarFun = (value)=>{
    setsidebar(value)
  }
  //  routing and navsidebar 
 return(<div className='bg-black text-white w-full min-h-screen'>
  
  <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar} search={search} setSearch={setSearch} isMobile={isMobile}/>
  <Routes>
    <Route path='/' element={<Home sidebar={sidebar} search={search}/>}/>
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
