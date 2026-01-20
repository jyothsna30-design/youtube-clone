import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import {useState} from 'react';

function Signup(){

    const [channelName,setChannelName]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [about,setAboutChannel]=useState("");
    
    const [uploadedPic,setUploadedPic]=useState("https://t3.ftcdn.net/jpg/11/61/33/40/360_F_1161334053_YhWMr4wDxYZlPMSsdTau11bLUM1fpbYF.jpg");
    const [profilePic,setProfilePic]=useState(uploadedPic);
    const navigate=useNavigate();
    const uploadImage= async (e)=>{
        const file=e.target.files[0];
        const data=new FormData();
        data.append('file',file);
        data.append('upload_preset','youtube-clone');
        //getting from cloudinary
        try{
            
             const response = await axios.post('https://api.cloudinary.com/v1_1/dimea4rmk/image/upload',data);
             const imageUrl=response.data.url;
             setUploadedPic(imageUrl);
             setProfilePic(imageUrl);
            }
        catch(err){
            console.log(err);
        }
    } 
    const handleSignup= async()=>{
              axios.post('http://localhost:8000/auth/signUp',{channelName,userName,password,about,profilePic}).then((res)=>{}).catch((err)=>{console.log(err);});
              toast.success('signup successful');
             navigate('/');
            }

            //signup form
    return (<div> <div className='bg-black'>
        <div className='w-120 relative top-20 left-100 border border-gray-700 shadow-[0.5px_0.5px_8px_white] bg-black rounded-lg'>
            <div className='flex text-white text-2xl items-center justify-center pt-7'>
                <YouTubeIcon sx={{color:"red",fontSize:"34px"}} />
                SignUp
            </div>
            <div className='flex flex-col p-2'>
                <input type="text" placeholder='Channel Name' value={channelName} onChange={(e)=>setChannelName(e.target.value)} className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)} className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" placeholder='About Your Channel' value={about} onChange={(e)=>setAboutChannel(e.target.value)} className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <div className='p-4 ml-6 flex'><input type='file' onChange={(e)=>uploadImage(e)} className='ml-2 block w-full text-white file:mr-4 
      file:rounded file:border-0
      file:bg-white file:text-black
      hover:file:bg-gray-200'/></div>
              <div className='flex'>
                <img src={uploadedPic} className="w-20 h-20 rounded-full ml-6"/>
               <div className='ml-10 mb-4 mt-4'>
                <button className='bg-red-600 text-white p-2 rounded-md hover:bg-red-800' onClick={handleSignup}>SignUp</button>   
                <Link to='/' className='bg-gray-600 text-white p-2 rounded-md hover:bg-gray-800 ml-4'><button>Home</button></Link>
            </div>
               
               </div>
            </div>
             
        </div>
    </div>
    <ToastContainer />
    </div>);
}
export default Signup;