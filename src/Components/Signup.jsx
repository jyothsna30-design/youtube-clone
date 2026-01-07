import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'; 
function Signup(){
    return (<div> <div className='bg-black'>
        <div className='w-120 relative top-20 left-100 border border-gray-700 shadow-[0.5px_0.5px_8px_white] bg-black rounded-lg'>
            <div className='flex text-white text-2xl items-center justify-center pt-7'>
                <YouTubeIcon sx={{color:"red",fontSize:"34px"}} />
                SignUp
            </div>
            <div className='flex flex-col p-2'>
                <input type="text" placeholder='Channel Name' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" placeholder='User Name' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="password" placeholder='Password' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" placeholder='About Your Channel' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <div className='p-4 ml-6 flex'><input type='file' accept='image/*' className='ml-2 block w-full text-white file:mr-4 
      file:rounded file:border-0
      file:bg-white file:text-black
      hover:file:bg-gray-200'/></div>
              <div className='flex'>
                <img src="https://t3.ftcdn.net/jpg/11/61/33/40/360_F_1161334053_YhWMr4wDxYZlPMSsdTau11bLUM1fpbYF.jpg" className="w-20 h-20 rounded-full ml-6"/>
               <div className='ml-10 mb-4 mt-4'>
                <button className='bg-red-600 text-white p-2 rounded-md hover:bg-red-800'>SignUp</button>   
                <Link to='/' className='bg-gray-600 text-white p-2 rounded-md hover:bg-gray-800 ml-4'><button>Home</button></Link>
            </div>
               
               </div>
            </div>
             
            

        </div>
    </div></div>);
}
export default Signup;