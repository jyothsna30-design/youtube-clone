import Sidenavbar from "./Sidenavbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function Profile({sidebar}) {
      const {id} = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    //Fetching channel details
    const fetchProfileData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/${id}/channel`);
            console.log(response.data);
            const videos = response.data.videos || [];
            setData(response.data.videos);
            setUser(videos[0]?.user || null);
        }catch (error) {
            console.error('Error fetching profile data:', error);
        }}
    useEffect(() => {
        fetchProfileData();

    }, []);
  return (
    <div>
      <Sidenavbar sidebar={sidebar}/>
      {sidebar ?   //with sidenav bar
      <div className="max-w-3xl">
        <div>
            <div>
                <img src={user?.profilePic} alt="Avatar" className="w-32 h-32 relative top-23 left-70 rounded-full"/>
                </div>
            <div>
                <h2 className="text-2xl font-bold text-white relative left-110">{user?.channelName}</h2>
                <p className="text-white text-light relative left-110">
                {user?.userName} . {data.length}  videos
                </p>
                <div>{user?.about}</div>
            </div>
        </div>
        <div className="max-w-3xl mt-10">
            <h3 className="text-xl font-semibold relative left-70 top-10 border-b border-white">Uploaded Videos <ArrowRightIcon /></h3>
        
            <div className="w-full flex flex-wrap ml-70 mt-10">
                {data.map((video,index)=>{
                return(
                   <Link to={`/watch/${video._id}`} key={index}>
                <img src={video?.thumbnail} alt="Video Thumbnail" className="w-60 h-36 m-4"/>
                <p className="ml-5"> {video?.title}</p>
                <p className="font-extralight text-xs ml-5">Created at {video?.createdAt.slice(0,10)}</p>
                </Link>  
                );

                })}
                
                 
                   
        </div>
        </div>
    </div> : //without sidenav bar
    <div className="max-w-3xl">
        <div>
            <div>
                <img src={user?.profilePic} alt="Avatar" className="w-32 h-32 relative top-23 left-4 rounded-full"/>
                </div>
            <div>
                <h2 className="text-2xl font-bold text-white relative left-40">{user?.channelName}</h2>
                <p className="text-white text-light relative left-40">
                {user?.userName} . {data.length}  videos
                </p>
            </div>
        </div>
        <div className="max-w-3xl mt-10">
            <h3 className="text-xl font-semibold relative left-4 top-10 border-b border-white">Uploaded Videos <ArrowRightIcon /></h3>
        
            <div className="w-full flex flex-wrap ml-1 mt-10">
                 {data.map((video,index)=>{
                return(
                   <Link to={`/watch/${video._id}`} key={index}>
                <img src={video?.thumbnail} alt="Video Thumbnail" className="w-50 h-36 m-4"/>
                <p className="ml-5"> {video?.title}</p>
                <p className="font-extralight text-xs ml-5">Created at {video?.createdAt.slice(0,10)}</p>
                </Link>  
                );

                })}
                   
        </div>
        </div>
    </div>
    
    
    
    
    }
    
    </div>
  );
}
export default Profile;