import Sidenavbar from "./Sidenavbar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

function Profile({sidebar}) {
  return (
    <div>
      <Sidenavbar sidebar={sidebar}/>
      {sidebar ?
      <div className="max-w-3xl">
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="w-32 h-32 relative top-23 left-70 rounded-full"/>
                </div>
            <div>
                <h2 className="text-2xl font-bold text-white relative left-110">Username</h2>
                <p className="text-white text-light relative left-110">
                100 Subscribers
                </p>
            </div>
        </div>
        <div className="max-w-3xl mt-10">
            <h3 className="text-xl font-semibold relative left-70 top-10 border-b border-white">Uploaded Videos <ArrowRightIcon /></h3>
        
            <div className="w-full flex flex-wrap ml-70 mt-10">
                <Link to="/watch/1">
                <img src="https://www.w3schools.com/java/images/img_java_intro.png" alt="Video Thumbnail" className="w-60 h-36 m-4"/>
                <p className="ml-5"> Installation video</p>
                <p className="font-extralight text-xs ml-5">Created at 2024-07-09</p>
                </Link>  
                 <Link to="/watch/1">
                <img src="https://www.w3schools.com/java/images/img_java_intro.png" alt="Video Thumbnail" className="w-60 h-36 m-4"/>
                 <p className="ml-5"> Installation video</p>
                <p className="font-extralight text-xs ml-5">Created at 2024-07-09</p>
                </Link>  
                   
        </div>
        </div>
    </div> :
    <div className="max-w-3xl">
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="w-32 h-32 relative top-23 left-4 rounded-full"/>
                </div>
            <div>
                <h2 className="text-2xl font-bold text-white relative left-40">Username</h2>
                <p className="text-white text-light relative left-40">
                100 Subscribers
                </p>
            </div>
        </div>
        <div className="max-w-3xl mt-10">
            <h3 className="text-xl font-semibold relative left-4 top-10 border-b border-white">Uploaded Videos <ArrowRightIcon /></h3>
        
            <div className="w-full flex flex-wrap ml-1 mt-10">
                <Link to="/watch/1">
                <img src="https://www.w3schools.com/java/images/img_java_intro.png" alt="Video Thumbnail" className="w-60 h-36 m-4"/>
                <p className="ml-5"> Installation video</p>
                <p className="font-extralight text-xs ml-5">Created at 2024-07-09</p>
                </Link>  
                 <Link to="/watch/1">
                <img src="https://www.w3schools.com/java/images/img_java_intro.png" alt="Video Thumbnail" className="w-60 h-36 m-4"/>
                 <p className="ml-5"> Installation video</p>
                <p className="font-extralight text-xs ml-5">Created at 2024-07-09</p>
                </Link>  
                   
        </div>
        </div>
    </div>
    
    
    
    
    }
    
    </div>
  );
}
export default Profile;