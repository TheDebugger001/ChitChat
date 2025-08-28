import React from 'react'
import Navbar from '../Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UserSidebar from '../UserSidebar'
import MessageBody from '../MessageBody'

const Home = () => {
  return (
    <div className='w-23/24 h-screen overflow-x-hidden fixed right-0 top-0 flex flex-col items-center gap-[0.1em]'>
      {/* <Navbar /> */}
      <div className='w-full h-full overflow-y-hidden flex'>
        <UserSidebar />
        <MessageBody />
      </div>
    </div>
  )
}

export default Home
