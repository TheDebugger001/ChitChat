import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[4.5em] ring-1 ring-b ring-orange-500 flex items-center justify-between'>
      {/* The Logo of Chit & Chat */}
      <div className='w-2/12 h-full bg-gray-300/5'></div>
      <div className='w-2/12 h-full bg-gray-300/5 flex items-center justify-evenly'>
        <div className='w-2/11 h-8/12 bg-gray-600 rounded-full'></div>
        <div className='w-2/11 h-8/12 bg-gray-600 rounded-full'></div>
        <div className='w-2/11 h-8/12 bg-gray-600 rounded-full'></div>
      </div>
    </div>
  )
}

export default Navbar