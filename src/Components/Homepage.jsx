import {Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

function Homepage({sidebar}){
 
       const [data,setdata]= useState([]);
       //fetch all videos
       useEffect(()=>{
             const fetchData = async()=>{
      try{
        const response = await axios.get('http://localhost:8000/api/allvideo');
        console.log(response.data.videos);
        setdata(response.data.videos);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }
    fetchData();

       },[]) 
       //options for filtering videos
    const options = ["All ","News","Music","Live","Gaming","T2 cricket","movies","Astrology","comedy","coke studio","kids shows","cartoons","old movies"];
    //if sidebar is true render with sidebar else without sidebar
    return(
     <> 
     {sidebar ?
     <div className="bg-black w-full min-h-screen pt-14">
    <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="fixed top-12 left-60 right-0 bg-black z-40 flex overflow-x-auto whitespace-nowrap px-4 no-scrollbar">
            { options.map((item,index)=>{
                return(<div key={index} className="text-white cursor-pointer m-2 bg-gray-800 px-3 py-1 rounded-lg shrink-0">
            {item}
          </div>);
            })}
         
          
        </div></div>
        {/* mapping videos */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ml-60 mt-5">
         {
            data?.map((video,index)=>{
               return(<Link to={`/watch/${video._id}`} key={index}>
          <div className="cursor-pointer">
             <img src={video.thumbnail} alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src={video?.user?.profilePic} className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>{video?.title}</div>
             <div className="text-white mt-7 ml-4">{video?.channelName}</div>
             <div className="text-white">{video?.likes}</div>
             </div>
          </div>
          </div>
           </Link>)
               
            })
         }
        
       </div>

    </div>: <div>  {/* without sidebar */}
    <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="fixed top-12 left-0 right-0 bg-black z-40 flex overflow-x-auto whitespace-nowrap px-4 no-scrollbar">
            { options.map((item,index)=>{
                return(<div key={index} className="text-white cursor-pointer m-2 bg-gray-800
                       px-3 py-1 rounded-lg shrink-0">
            {item}
          </div>);
            })}
          
        </div>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
           {
            data?.map((video,index)=>{
               return(<Link to={`/watch/${video._id}`} key={index}>
          <div className="cursor-pointer">
             <img src={video.thumbnail} alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src={video?.user?.profilePic} className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>{video?.title}</div>
             <div className="text-white mt-7 ml-4">{video?.channelName}</div>
             <div className="text-white">{video?.likes}</div>
             </div>
          </div>
          </div>
           </Link>)
               
            })
         }
          

       </div> </div>
    }



    </>
    )
}
export default Homepage;