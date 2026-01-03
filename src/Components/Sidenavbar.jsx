import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';
function Sidenavbar({sidebar}){
    return(<>
    {sidebar &&
    <div className='bg-black fixed top-12 w-60 h-100% overflow-y-scroll no-scrollbar'>
    <div className='border-b-2 bg-black border-b-gray-500 w-60'>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><HomeIcon sx={{marginRight:2}}/>Home</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><VideoCallIcon sx={{marginRight:2}}/>Shorts</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><SubscriptionsIcon sx={{marginRight:2}}/>Subscriptions</div>
    </div>
    <div>
     <div className='border-b-2 bg-black border-b-gray-500 w-60'>
        <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2 text-white">You<ChevronRightIcon /></div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><RecentActorsIcon sx={{marginRight:2}}/>Channels</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><HistoryIcon sx={{marginRight:2}}/>History</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><PlaylistPlayIcon sx={{marginRight:2}}/>Playlists</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><SlideshowIcon sx={{marginRight:2}}/>Your videos</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><ThumbUpOffAltIcon sx={{marginRight:2}}/>Liked videos</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white"><ContentCutIcon sx={{marginRight:2}}/>Clips</div>
    </div>
     <div className='border-b-2 bg-black border-b-gray-500 w-60'>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2 font-semibold h-10 hover:bg-gray-800 text-white">Subscriptions</div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduP39F0DVMQ86qBUa8QsC84bGzTPGGGgSTA&s" className='border rounded-full w-6 h-6 mr-2'></img><div>Vlad and Niki</div></div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj" className='border rounded-full w-6 h-6 mr-2'></img><div>BBC News</div></div>
      <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduP39F0DVMQ86qBUa8QsC84bGzTPGGGgSTA&s" className='border rounded-full w-6 h-6 mr-2'></img><div>Vlad and Niki</div></div>
     <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduP39F0DVMQ86qBUa8QsC84bGzTPGGGgSTA&s" className='border rounded-full w-6 h-6 mr-2'></img><div>Vlad and Niki</div></div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj" className='border rounded-full w-6 h-6 mr-2'></img><div>BBC News</div></div>
    <div className="bg-black cursor-pointer border-0 rounded-b-full rounded-t-full p-2  h-10 hover:bg-gray-800 text-white flex"><img src="https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj" className='border rounded-full w-6 h-6 mr-2'></img><div>BBC News</div></div>
    </div>
    </div>
     </div>}
    </>)
}
export default Sidenavbar;