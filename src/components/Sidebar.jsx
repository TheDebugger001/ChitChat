import React from 'react'
import { useState } from 'react'
import Sidebar_btn from './Sidebar_btn'
import { FiHome } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
// import { FiPaperPlane } from 'react-icons/fi';
import { FiPaperclip } from 'react-icons/fi'
import { FiPlayCircle } from 'react-icons/fi';
// import { FaSearch } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'



const Sidebar = () => {
  const [active, setActive] = useState('clicked')

  return (
    <div className='w-[4.3em] h-[50.7em] fixed top-0 left-0 z-[99] border-r-2 border-orange-500 bg-gray-900 flex flex-col items-center overflow-x-hidden hover:w-2/12 transition-all duration-700 ease-in-out'>
      <div className='w-9/10 h-1/12 bg-gray-300/5 relative mt-[3em]'></div>
      <div className='w-full h-3/6 flex flex-col items-center gap-3 relative mt-10'>
        
        <Sidebar_btn
        icon={<FiHome />}
        label="Home" 
        onClick={() => setActive('home')} 
        active={active === 'home'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FiSearch />}
        label="Search" 
        onClick={() => setActive('search')}
        active={active === 'search'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FiPaperclip />}
        label="Message" 
        onClick={() => setActive('dashboard')} 
        active={active === 'dashboard'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FiPlayCircle />}
        label="Post" 
        onClick={() => setActive('post')} 
        active={active === 'post'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FiBell />}
        label="Notification" 
        onClick={() => setActive('notification')} 
        active={active === 'notification'}
        >
        </Sidebar_btn>
        <Sidebar_btn
        icon={<FiUser />}
        label="Profile" 
        onClick={() => setActive('profile')} 
        active={active === 'profile'}
        >
        </Sidebar_btn>
      </div>

      {/* These are the button of settings and Logout */}
      <div className='w-full h-2/11 flex flex-col items-center justify-self-end relative gap-2 mt-auto'>
        <div className='w-11/12 h-4/10 rounded-md hover:bg-gray-600/10 active:bg-gray-600/20 gap-5 flex items-center hover:cursor-pointer'>
          <div 
          className={`ml-6 text-2xl text-gray-400`}>
            <FiSettings />
          </div>
          <div className={`text-2xl font-small text-gray-400`}>Settings</div>
        </div>
        <div className='w-11/12 h-4/10 rounded-md hover:bg-gray-600/10 active:bg-gray-600/20 gap-5 flex items-center hover:cursor-pointer'>
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