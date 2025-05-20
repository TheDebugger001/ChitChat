import React from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Navbar from '../Navbar'

const MainLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/sign_up';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  )
}

export default MainLayout