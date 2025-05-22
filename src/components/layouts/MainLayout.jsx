import React, { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';

const MainLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/sign_up';
  const hideSidebar = location.pathname === '/sign_up';


  return (
    <div className='flex w-full bg-white'>
      {/* {!hideNavbar && <Navbar />} */}
      {!hideSidebar && <Sidebar />}
      <Outlet />
    </div>
  )
}

export default MainLayout