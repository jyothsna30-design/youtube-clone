import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';

function Video(){
    return(<>
    <div className="mt-1 flex p-25 justify-center">
        <div className="w-full max-w-875 flex flex-col">
            <div className="w-full">
                <video width="700" height="400" controls autoPlay >
                     <source src={"https://www.youtube.com/watch?v=IjOk5TC-a58"} type="video/mp4" />
                     <source src={"https://www.youtube.com/watch?v=IjOk5TC-a58"} type="video/webm" />
                     your broswer doesnot the video tag
                </video>
            </div>
            <div className="flex flex-col">
                <div className="text-xl ">Masha and the bear</div>
                <div className="flex space-between mt-5">
                    <div className="flex">
                        <div className="mr-2 cursor-pointer">
                            <Link to="/user/1">
                            <img src={"https://img.freepik.com/free-vector/media-content-management-vlogging-activities-product-videos-sharing-online-marketing-advertising-tool-female-vlogger-streaming-live_335657-864.jpg?semt=ais_hybrid&w=740&q=80"} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                            </Link>
                        </div>
                        <div className = "flex flex-col gap-2">
                            <div className="text-xl">user1</div>
                            <div className="font-light">2024-7-2</div>
                        </div>
                        <div className="flex border-2 ml-7 bg-white text-black rounded-3xl w-30 h-10 pt-1.5 cursor-pointer justify-center font-bold">Subscribe</div>
                    </div>

                    <div className='border-0 z-10 cursor-pointer rounded-3xl p-2 bg-gray-950 text-white ml-90'>
                        <div className='flex gap-1'>
                            <ThumbUpOffAltIcon /> <div>{32 }<span>|</span></div>
                            <ThumbDownOffAltIcon />
                        </div>
                       
                    </div>
                    
                </div>
                 <div className='mt-2 border-0 bg-gray-950 rounded-2xl p-3 w-170'>
                            <div>2024-09-7</div>
                            <div>This video is related to</div>
                        </div>
                        <div>
                            <div className='font-semibold mt-2 text-xl'>2 comments</div>
                        </div>

                        <div>
                            <div className='flex mt-3'>
                                <img src={"https://img.freepik.com/free-vector/media-content-management-vlogging-activities-product-videos-sharing-online-marketing-advertising-tool-female-vlogger-streaming-live_335657-864.jpg?semt=ais_hybrid&w=740&q=80"} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                                <div className='w-100%'>
                                    <input type="text" placeholder='Add a comment' className='border-b border-gray-500 ml-2 mt-2 w-150'></input>
                                 <div className='flex mt-2 ml-120'>
                                    <div className='mr-2 border rounded-2xl p-1'>Cancel</div>
                                    <div className='border rounded-2xl p-1'>Comment</div>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <div className='flex'>
                                <img src={"https://img.freepik.com/free-vector/media-content-management-vlogging-activities-product-videos-sharing-online-marketing-advertising-tool-female-vlogger-streaming-live_335657-864.jpg?semt=ais_hybrid&w=740&q=80"} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                                <div className='w-100% ml-2'>
                                    <div>User <span className='font-extralight'>2023-09-7</span></div>
                                    <div>ddffh</div>
                                </div></div>
                        </div>
            </div>
        </div>

        <div className="w-100% max-w-406 p-10 flex flex-col gap-15" >
            <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>

             <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>

             <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>

             <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>

             <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>

             <div className='flex'>
                <div>
               <img src="https://i.ytimg.com/vi/CZTCdYsSh_A/maxresdefault.jpg" className="w-50 h-25"/></div>
               <div className='flex flex-col ml-3'>
                <div>Vlad and Niki fun at shopping mall</div>
                <div className='flex text-xs'>
                    <div className='mt-3 mr-3 font-light'>234M Views </div>
                    <div  className='mt-3  font-light'>2 years ago</div>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>)
}
export default Video;