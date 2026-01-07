import './Login.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="login">
        <div className="login_card">
              <div className="login_card_header">
                <YouTubeIcon sx={{color:"red",fontSize:"34px"}}> </YouTubeIcon>Login
                </div>
                  <input type="text" placeholder="Username"className="mb-4 p-2 mt-2 w-full text-white bg-[#222222] rounded-md "/>
                  <input type="password" placeholder="password"className="mb-4 p-2 w-full text-white bg-[#222222] rounded-md "/>
                  <div className="flex gap-10 justify-between">
                  <button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800">  Login </button>
                  <Link to='/signup'><button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800">  SignUp </button></Link>
                  <Link to='/'><button className="bg-red-600 text-white p-2 w-20 rounded-md hover:bg-red-800">  Cancel </button></Link></div>
        </div>
        </div>
  )
}
export default Login