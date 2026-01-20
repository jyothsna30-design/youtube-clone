import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Video(){
    const [comments,setComments]=useState("");
    const [data,setData]=useState(null);
    const [videoUrl,setVideoUrl]=useState("");
    const [message,setMessage]=useState([]);
    const {id}=useParams();
    //getting video by id
    const fetchVideoById=async()=>{
        await axios.get(`http://localhost:8000/api/video/${id}`).then((res)=>{
            setData(res.data.video);
            setVideoUrl(res?.data?.video?.videoLink);
            console.log(res.data.video);
        }).catch((err)=>{
            console.log(err);
        });
    }
    //getting comments by id
    const getCommentByVideoId=async()=>{
        await axios.get(`http://localhost:8000/commentapi/comment/${id}`).then((res)=>{
            console.log(res.data.comments);
            setMessage(res.data.comments);
        }).catch((err)=>{
            console.log(err);
        });
    }
    useEffect(()=>{

        fetchVideoById();
        getCommentByVideoId();
    },[])


    const handleComment= async()=>{
        const body = {"video":id,"message":comments};

        await axios.post('http://localhost:8000/commentapi/comment',body,{withCredentials:true}).then((res)=>{
          console.log(res.data);
           const newComment=res.data.comment;
           setMessage((prevComments)=>[...prevComments,newComment]);
           setComments("");
        }).catch((err)=>{
            toast.error('Login to comment');

            console.log(err);});  
    } //Comment UI
    return(<>
    <div className="mt-1 flex p-25 justify-center">
        <div className="w-full max-w-875 flex flex-col">
            <div className="w-full">
                {data && 
                <video width="650" controls autoPlay >
                     <source src={videoUrl} type="video/mp4" />
                     <source src={videoUrl} type="video/webm" />
                     your broswer doesnot the video tag
                </video>}
            </div>
            <div className="flex flex-col">
                <div className="text-xl ">{data?.title}</div>
                <div className="flex space-between mt-5">
                    <div className="flex">
                        <div className="mr-2 cursor-pointer">
                            <Link to={`/user/${data?.user?._id}`}>
                            <img src={data?.user?.profilePic} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                            </Link>
                        </div>
                        <div className = "flex flex-col gap-2">
                            <div className="text-xl">{data?.user?.channelName}</div>
                            <div className="font-light">{data?.user?.createdAt.slice(0,10)}</div>
                        </div>
                        <div className="flex border-2 ml-7 bg-white text-black rounded-3xl w-30 h-10 pt-1.5 cursor-pointer justify-center font-bold">Subscribe</div>
                    </div>

                    <div className='border-0 z-10 cursor-pointer rounded-3xl p-2 bg-gray-950 text-white ml-90'>
                        <div className='flex gap-1'>
                            <ThumbUpOffAltIcon /> <div>{data?.like}<span>|</span></div>
                            <ThumbDownOffAltIcon />
                        </div>
                       
                    </div>
                    
                </div>
                 <div className='mt-2 border-0 bg-gray-950 rounded-2xl p-3 w-180'>
                            <div className="text-xs">{data?.createdAt.slice(0,10)}</div>
                            <div>{data?.description}</div>
                        </div>
                        <div>
                            <div className='font-semibold mt-2 text-xl'>2 comments</div>
                        </div>

                        <div>
                            <div className='flex mt-3'>
                                <img src={data?.user?.profilePic} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                                <div className='w-100%'>
                                    <input type="text" value={comments} placeholder='Add a comment' onChange={(e)=>{setComments(e.target.value)}} className='border-b border-gray-500 ml-2 mt-2 w-150'></input>
                                 <div className='flex mt-2 ml-120'>
                                    <div className='mr-2 border rounded-2xl p-1'>Cancel</div>
                                    <div className='border rounded-2xl p-1' onClick={handleComment}>Comment</div>
                                 </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {message?.map((commenntItem,index)=>{
                                return(
                                    <div className='flex m-4'>
                                <img src={commenntItem?.user?.profilePic} className="w-7 h-8 mt-2 border-0 rounded-full"/>
                                <div className='w-100% ml-2'>
                                    <div>{commenntItem?.user?.channelName}  </div>
                                    <div className="text-xs">{commenntItem?.createdAt.slice(0,10)}</div>
                                    <div>{commenntItem?.message}</div>
                                </div></div>
                                )
                            })}
                             
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
        <ToastContainer />
    </div>
    </>)
}
export default Video;