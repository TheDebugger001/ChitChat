import React from 'react'
import Navbar from '../Navbar'
import UserSidebar from '../UserSidebar'

const Home = () => {
  return (
    <div className='w-23/24 h-screen overflow-x-hidden fixed right-0 top-0 flex flex-col items-center gap-[0.1em]'>
      <Navbar />
      <div className='w-full h-13/14 overflow-y-hidden flex'>
        <UserSidebar />
      </div>
    </div>
  )
}

export default Home