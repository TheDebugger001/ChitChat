import React from 'react'
import UserProfile from './UserProfile'

const YourPerson = () => {
  return (
    <div className='w-full h-1/11 border-b-1 border-gray-600/40 active:bg-gray-600/10 flex items-center justify-evenly'>
      <div className='w-14 h-14 flex items-center justify-center relative left-3'>
        <UserProfile></UserProfile>
      </div>
      <div className='w-6/9 h-full'>
        <div className='w-full h-1/2'>
          <p className=' text-gray-300 relative left-4'>Guerschom_123</p>
        </div>
        <div className='w-full h-1/2'>
          <p className='text-sm text-white font-semibold relative left-4'>Umeze ute x guer?</p>
        </div>
      </div>
      <div className='w-14 h-full flex flex-col items-center justify-evenly'>
        <div className='w-full h-2/5 flex items-center justify-center'>
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </div>
        <div className='w-full h-2/5'>
          <p className='font-light text-gray-200/50 text-[.8em] flex items-center justify-center'>12:30 PM</p>
        </div>
      </div>
    </div>
  )
}

export default YourPerson