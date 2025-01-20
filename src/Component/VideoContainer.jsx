import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utlis/Constants'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);

useEffect(()=>{
  getVideos();  
},[])
  const getVideos=async()=>{
    const response = await fetch(YOUTUBE_API);
    const json = await response.json();
    // console.log(json); 
    setVideos(json.items)
  };

  
  return (
    <div className='flex flex-wrap shadow-md'>
    {videos.map((item)=> (
      <Link key={item.id} id={item.id} to={"/watch?v="+item.id}>
      <VideoCard  info={item}/>
      </Link>
    ))}
      
    </div>
  )
}

export default VideoContainer
