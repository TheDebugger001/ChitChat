import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import MainLayout from './components/layouts/MainLayout'

function App() {
  

  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <Router>
        <Routes>
          <Route path="/sign_up" element={<Login />} />
    
          {/* The Navbar Route. It is the Main one */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
