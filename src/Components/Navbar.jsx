import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useEffect, useState } from 'react';

//import PersonIcon from '@mui/icons-material/Person';

function Navbar({setSidebarFun,sidebar}){
  const [userpic,setUserpic] = useState("https://t3.ftcdn.net/jpg/11/61/33/40/360_F_1161334053_YhWMr4wDxYZlPMSsdTau11bLUM1fpbYF.jpg");
  const [navbarmodal,setnavbarmodal] = useState(false);
  function handleClick(){
    setnavbarmodal(prev=>!prev);
  }
  const toggleBar = ()=>{
    setSidebarFun(!sidebar);
  }
  return (
  <div className='fixed top-0 w-full h-14 bg-black flex z-50'>
   <div className='m-3 cursor-pointer' onClick={toggleBar}><MenuIcon sx={{color:"white"}} /></div>
   <div className='mt-3'><YouTubeIcon sx={{color:"red",fontSize:"34px"}} /></div>
   <div className='mt-3 text-white text-xl'>Youtube</div>
   <div className='ml-70 mt-3 border-0 border-gray-950 h-8 rounded-b-full rounded-t-full bg-gray-950'><input className="w-80 text-gray-400" type="text" placeholder='search'></input><SearchIcon sx={{color:"white"}}/></div>
   <div className='mt-3 ml-3 border-0 rounded-full bg-gray-950 w-8 h-8 '><KeyboardVoiceIcon sx={{color:"white"}} /></div>
   <div className='flex ml-70 mt-3 relative'>
    <VideoCallIcon sx={{color:"white",marginRight:"20px"}}/>
    <NotificationsNoneIcon sx={{color:"white",marginRight:"20px"}}/>
    <img onClick={handleClick} src={userpic} className="border-0 rounded-full cursor-pointer w-7 h-7"></img>
      
      { navbarmodal &&
      <div className='flex flex-col absolute top-10'>
        <div className="bg-gray-800 cursor-pointer p-5 w-30 h-15 hover:bg-black text-white">Profile</div>
        <div className="bg-gray-800 cursor-pointer p-5 h-15 hover:bg-black text-white">Login</div>
        <div className="bg-gray-800 cursor-pointer p-5 h-15 hover:bg-black text-white">Logout</div>
      </div>}
   </div>
  </div>)
}
export default Navbar;