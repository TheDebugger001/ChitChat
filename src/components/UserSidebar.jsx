import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Sort_btn from './Sort_btn'
import YourPerson from './YourPerson'

const UserSidebar = () => {
  return (
    <div className='w-3/12 h-full border-r-1 flex flex-col gap-1'>
      <div className='w-full h-14 bg-gray-400/10'></div>
      <div className='w-full h-1/12 flex items-center justify-center'>
         <input type="text" placeholder='Search' className='w-10/12 h-9/12 bg-gray-800 rounded-full outline-none pl-5 text-gray-200 pr-11 focus:border-1 focus:border-gray-600' />
         <FiSearch className='text-lg text-gray-200 relative z-10 -left-8'/>
      </div>

      {/* Sorting people based on different things */}
      <div className='w-full h-1/14 flex items-center justify-evenly'>
         <Sort_btn>Unread</Sort_btn>
         <Sort_btn>Read</Sort_btn>
         <Sort_btn>Favorites</Sort_btn>
         <Sort_btn>Groups</Sort_btn>
      </div>

      {/* Your people */}
      <div className='w-full h-10/12'>
         <YourPerson />
      </div>
    </div>
  )
}

export default UserSidebar