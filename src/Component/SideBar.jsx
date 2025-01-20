import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {
const isMenu = useSelector((store)=>store.app.ismenuOpen);

if(!isMenu) return null;

  return (
    <div className='p-8 px-4 shadow-lg text-md w-56'>
      <ul>
        <li className='px-2'><Link to='/'>🏠︎Home</Link></li>
        <li>🎥Shorts</li>
        <li className='px-2'>🎬Subscription</li>
      </ul>

      <h1 className='font-bold pt-5 pb-2'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>🛒Shopping</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>

      <h1 className='font-bold pt-5 pb-2'>Watch Later</h1>
      <ul>
        <li>Movie</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>


    </div>
  )
}

export default SideBar
