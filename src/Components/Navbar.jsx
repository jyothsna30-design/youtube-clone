import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Navbar({setSidebarFun,sidebar,search,setSearch,isMobile}){
  const [userpic,setUserpic] = useState("https://t3.ftcdn.net/jpg/11/61/33/40/360_F_1161334053_YhWMr4wDxYZlPMSsdTau11bLUM1fpbYF.jpg");
  const [navbarmodal,setnavbarmodal] = useState(false);
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  const [islogin,setislogin] = useState(false);
  
  
  const navigate = useNavigate();
  //function for login and logout
  function onClickoflogin(value){
     setnavbarmodal(false);
    if(value==="login"){
      setIsLoggedIn(true);
      navigate('/login');
     
    }
    else{
      localStorage.clear();
      getLogoutFun();
      setTimeout(()=>{
        navigate('/');
        window.location.reload();
      },2000);
      
    }
  }
  const getLogoutFun= async()=>{
    
      await axios.post('http://localhost:8000/auth/logout',{},{withCredentials:true}).then((res)=>{
        console.log(res.data);
      
      }).catch((err)=>{console.log(err)});
    
  } 
  
  function handleClick(){
    setnavbarmodal(prev=>!prev);
  }
  function handleprofile(){
    let userId=localStorage.getItem('userId');
    navigate(`/user/${userId}`);
    setnavbarmodal(false);
  }
  //function to toggle sidebar
  const toggleBar = ()=>{
    setSidebarFun(!sidebar);
  }
  useEffect(()=>{
    let userProfilePic=localStorage.getItem('userProfilePic');
    setislogin( localStorage.getItem('token') ? true : false);
    if(userProfilePic){
      setUserpic(userProfilePic);
    }
  },[]);
  //navbar component
  return (
  <div className='fixed top-0 w-full h-14 bg-black flex z-50'>
    {!isMobile && 
   (<div className='m-3 cursor-pointer' onClick={toggleBar}><MenuIcon sx={{color:"white"}} /></div>)}
   <div className='mt-3'><YouTubeIcon sx={{color:"red",fontSize:"34px"}} /></div>
   {!isMobile && <Link to="/"><div className='mt-3 text-white text-xl'>Youtube</div></Link>}
   <div className='md:ml-70 mt-3 z-50 border border-gray-900 h-9 rounded-b-full rounded-t-full bg-gray-950'><input className="w-80 text-white p-1 bg-transparent outline-none focus:outline-none focus:ring-0" type="text" value={search} placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input>{!isMobile && <SearchIcon sx={{color:"white"}}/>}</div>
   {!isMobile && <div className='mt-3 ml-3 border-0 rounded-full bg-gray-950 w-8 h-8 '><KeyboardVoiceIcon sx={{color:"white"}} /></div>}
   <div className='flex ml-70 mt-3 relative'>
    <Link to='/654/upload'><VideoCallIcon sx={{color:"white",marginRight:"20px"}}/></Link>
    <NotificationsNoneIcon sx={{color:"white",marginRight:"20px"}}/>
    <img onClick={handleClick} src={userpic} className="border-0 rounded-full cursor-pointer w-7 h-7"></img>
      
      { navbarmodal &&
      <div className='flex flex-col absolute top-10'>
        
       {islogin && <div className="bg-gray-800 cursor-pointer p-5 w-30 h-15 hover:bg-black text-white" onClick={handleprofile}>Profile</div>}
       {!islogin && <div className="bg-gray-800 cursor-pointer p-5 h-15 hover:bg-black text-white" onClick={()=> onClickoflogin("login")}>Login</div>}
       {islogin && <div className="bg-gray-800 cursor-pointer p-5 h-15 hover:bg-black text-white" onClick={()=> onClickoflogin("logout")}>Logout</div>}
      </div>}
   </div>
  </div>)
}
export default Navbar;