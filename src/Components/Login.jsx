import './Login.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  //state for login fields
    const [loginField,setloginField] = useState({
        userName:"",
        password:""
    });
    const handleOnChange = (e,field)=>{
    setloginField({
        ...loginField,
        [field]:e.target.value
    })
    }
    const navigate=useNavigate();
    const handleLogin = async()=>{
         axios.post('http://localhost:8000/auth/login',loginField,{withCredentials:true}).then((res)=>{
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('userId',res.data.user._id);
          localStorage.setItem('userProfilePic',res.data.user.profilePic);
          navigate('/');
          toast.success('login successful');
          console.log(res.data);}).catch((err)=>{
            toast.error('Invalid Credentials');
            console.log(err);});
         
         console.log("login details",loginField);
    }
    //login form 
  return (
    <div className="login">
        <div className="login_card">
              <div className="login_card_header">
                <YouTubeIcon sx={{color:"red",fontSize:"34px"}}> </YouTubeIcon>Login
                </div>
                  <input type="text" placeholder="Username" value={loginField.userName} onChange={(e)=> handleOnChange(e,"userName")} className="mb-4 p-2 mt-2 w-full text-white bg-[#222222] rounded-md "/>
                  <input type="password" placeholder="password" value={loginField.password} onChange={(e)=> handleOnChange(e,"password")} className="mb-4 p-2 w-full text-white bg-[#222222] rounded-md "/>
                  <div className="flex gap-10 justify-between">
                  <button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800" onClick={handleLogin}>  Login </button>
                  <Link to='/signup'><button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800">  SignUp </button></Link>
                  <Link to='/'><button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800">  Cancel </button></Link></div>
        </div>
        <ToastContainer />
        </div>
  )
}
export default Login