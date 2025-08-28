import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { FiMoreHorizontal, FiPhone, FiPhoneCall, FiStar, FiVideo } from 'react-icons/fi'
import UserProfile from './UserProfile';

const Navbar = () => {
  const [favorite, setFavorite] = useState(false);

  const [call, setCall] = useState('');

  const toggleVideo = () => {
    setCall(prev => (prev === 'video_call' ? '' : 'video_call'))
  }
  const toggleCall = () => {
    setCall(prev => (prev === 'calling' ? '' : 'calling'))
  }
  

  return (
    <div className='w-full h-[4em] border-b-1 border-orange-500 flex items-center justify-between'>
      {/* The name of Chit & Chat friend */}
      <div className='w-3/12 h-full flex items-center gap-2'>
        <div className='w-14 h-14 flex items-center ml-4'>
          <UserProfile />
        </div>
        <p className='text-gray-200 font-semibold text-xl'>Guerschom_123</p>
      </div>
      <div className='w-2/13 h-full flex items-center justify-evenly'>
        <div
        onClick={() => setFavorite(!favorite)}
        className={`w-2/12 h-6/12 bg-gray-600/10 rounded-full flex items-center justify-center text-xl text-gray-300 hover:bg-gray-600/40`}>
          {favorite == true ?
           <FaStar className='text-orange-500' /> :
            <FiStar />}
        </div>
        <div
        onClick={toggleVideo}
        call={call === 'video_call'}
        className={`w-2/12 h-6/12 bg-gray-600/10 rounded-full flex items-center justify-center text-xl hover:bg-gray-600/40 ${call === 'video_call' ? 'text-orange-500' : 'text-gray-300'}`}>
          <FiVideo />
        </div>
        <div
        onClick={toggleCall}
        call={call === 'calling'} 
        className={`w-2/12 h-6/12 bg-gray-600/10 rounded-full flex items-center justify-center text-xl hover:bg-gray-600/40 ${call === 'calling' ? 'text-orange-500' : 'text-gray-300'}`}>
          <FiPhone />
        </div>
        <div className='w-2/12 h-6/12 bg-gray-600/10 rounded-full flex items-center justify-center text-xl text-gray-300 hover:bg-gray-600/40 active:bg-gray-600/60'>
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  )
}

export default Navbar