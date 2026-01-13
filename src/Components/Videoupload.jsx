import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { useState } from 'react';  
import axios from 'axios';   
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Videoupload() {
const [inputValues,setInputValues]=useState({
    title:"",
    description:"",
    category:"",videoLink:"",thumbnailLink:""});

    const [loader,setLoader]= useState(false);
    
 const handleOnChange = (e,field)=>{
    setInputValues({
        ...inputValues,
        [field]:e.target.value
    })
    }

 const uploadImage= async (e,type)=>{
          setLoader(true);
         const file=e.target.files[0];
         const data=new FormData();
         data.append('file',file);
         data.append('upload_preset','youtube-clone');
         try{
              
             //cloudname=dimea4rmk
              const response = await axios.post(`https://api.cloudinary.com/v1_1/dimea4rmk/${type}/upload`,data);
              const Url=response.data.url;
               setLoader(false);
              let val= type==="image"?"thumbnailLink":"videoLink";
               setInputValues({
                      ...inputValues,
                        [val]:Url
            })
             }
         catch(err){
            setLoader(false);
             console.log(err);
         }
     }

  return (
    
    <div className='bg-black'>
        <div className='w-120 relative top-20 left-100 border border-gray-700 shadow-[0.5px_0.5px_8px_white] bg-black rounded-lg'>
            <div className='flex text-white text-2xl items-center justify-center pt-7'>
                <YouTubeIcon sx={{color:"red",fontSize:"34px"}} />
                Upload Video
            </div>
            <div className='flex flex-col p-4'>
                <input type="text" value={inputValues.title} onChange={(e)=>{handleOnChange(e,title)}} placeholder='Title of video' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" value={inputValues.description} onChange={(e)=>{handleOnChange(e,description)}} placeholder='Description' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <input type="text" value={inputValues.category} onChange={(e)=>{handleOnChange(e,category)}} placeholder='Category' className='w-100 bg-gray-800 text-white p-2 m-4 rounded-md outline-none'/>
                <div className='p-4 ml-6 flex'><span>Thumbnail</span><input type='file' onChange={(e)=>{uploadImage(e,"image")}} accept='image/*' className='ml-2 block w-full text-white
      file:mr-4 
      file:rounded file:border-0
      file:bg-white file:text-black
      hover:file:bg-gray-200'/></div>
                <div className='p-4 ml-6 flex'><span>Video File</span><input type='file' onChange={(e)=>{handleOnChange(e,"video")}} accept='video/*'  className='block w-full text-white
      file:mr-4 
      file:rounded file:border-0
      file:bg-white file:text-black
      hover:file:bg-gray-200'/></div>
            { loader &&  <Box sx={{ display: 'flex' }}>
                             <CircularProgress />
                             </Box>} 

            </div>
                
            <div className='ml-30 mb-4'>
                <button className='bg-red-600 text-white p-2 rounded-md hover:bg-red-800'>Upload</button>   
                <Link to='/' className='bg-gray-600 text-white p-2 rounded-md hover:bg-gray-800 ml-4'><button>Home</button></Link>
            </div>

        </div>
    </div>
  );
}
export default Videoupload;