

function Homepage({sidebar}){
    const options = ["All ","News","Music","Live","Gaming","T2 cricket","movies","Astrology","comedy","coke studio","kids shows","cartoons","old movies"];
    return(
     <>
     {sidebar ?
     <div className="bg-black w-full min-h-screen pt-14">
    <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="fixed top-12 left-60 right-0 bg-black z-40
                      flex overflow-x-auto whitespace-nowrap px-4 no-scrollbar">
            { options.map((item,index)=>{
                return(<div key={index} className="text-white cursor-pointer m-2 bg-gray-800
                       px-3 py-1 rounded-lg shrink-0">
            {item}
          </div>);
            })}
          
        </div></div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ml-60 mt-5">
          <div className="cursor-pointer">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>
          
       </div>

    </div>: <div>
    <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="fixed top-12 left-0 right-0 bg-black z-40
                      flex overflow-x-auto whitespace-nowrap px-4 no-scrollbar">
            { options.map((item,index)=>{
                return(<div key={index} className="text-white cursor-pointer m-2 bg-gray-800
                       px-3 py-1 rounded-lg shrink-0">
            {item}
          </div>);
            })}
          
        </div>
    </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
          <div className="cursor-pointer relative left-0 top-25">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer relative left-0 top-25">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer relative left-0 top-25">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

           <div className="cursor-pointer relative left-0 top-25">
             <img src="https://cdnblog.picsart.com/2022/05/blog_types-of-videos_video-7_1200x800-780x520.png" alt="video"  className="w-80 h-60 rounded-lg" />
             <div className="flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="w-8 h-8 mt-5 rounded-full" />
             <div className="font-bold mt-3 ml-2"><div>User</div>
             <div>5 likes</div></div>
          </div>
          </div>

       </div> </div>
    }



    </>
    )
}
export default Homepage;