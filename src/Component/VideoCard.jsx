import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    
    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className='p-2 py-4 m-2 w-80 shadow-lg'>
      <img alt='videoimage' src={thumbnails?.medium?.url}/>
      <ul className=''>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
     
    </div>
  )
}

export default VideoCard;