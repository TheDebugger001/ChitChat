import React from 'react'
import { useState } from 'react'
import Sidebar_btn from './Sidebar_btn'
import { FaHome } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { FaPaperPlane } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';



const Sidebar = () => {
  const [active, setActive] = useState('clicked')

  return (
    <div className='w-[4.3em] h-[46.2em] border-r-2 border-orange-500 flex flex-col items-center justify-between overflow-x-hidden hover:w-2/12 transition-all duration-700 ease-in-out'>
      <div className='w-full h-3/6 flex flex-col items-center gap-3 relative mt-10'>
        <Sidebar_btn
        icon={<FaHome />}
        label="Home" 
        onClick={() => setActive('home')} 
        active={active === 'home'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FaHome />}
        label="Status" 
        onClick={() => setActive('status')} 
        active={active === 'status'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FaPaperPlane />}
        label="Message" 
        onClick={() => setActive('dashboard')} 
        active={active === 'dashboard'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FaPlayCircle />}
        label="Post" 
        onClick={() => setActive('post')} 
        active={active === 'post'}
        >
        </Sidebar_btn>
      </div>

      <div className='w-full h-1/12 flex items-center justify-center relative -top-5'>
        <div className='w-11/12 h-7/8 rounded-md hover:bg-gray-600/10 active:bg-gray-600/20 gap-5 flex items-center hover:cursor-pointer'>
          <div className={`ml-6 text-2xl text-gray-400 ${active ? 'text-orange-500' : ''}`}>
            <FiLogOut />
          </div>
          <div className={`text-2xl font-small text-gray-400 ${active ? 'text-orange-500' : ''}`}>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar