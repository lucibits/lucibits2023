import React, { useState } from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MedicationDelivery from './pages/projects/MedicationDelivery';
import PatientPortal from './pages/projects/PatientPortal';
import Schedules from './pages/projects/Schedules';
import MBDesignSystem from './pages/projects/MBDesignSystem';
import Uplifter from './pages/projects/Uplifter';
import Cyclescheme from './pages/projects/Cyclescheme';
import Blog from './pages/Blog';
import About from './pages/About';
import * as Unicons from '@iconscout/react-unicons';


function App() {

  let Logo = require('../src/assets/LF-photo.jpeg');

  const [darkMode, setDarkMode] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setDarkMode(!darkMode)
    setToggle(!toggle)
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <nav className='flex justify-between items-center bg-white/90 dark:bg-slate-900 dark:text-slate-300 py-4 px-4 lg:px-36 text-slate-700 w-full sticky top-0 transition-colors duration-400'>

            <div className='flex items-center'>
                <Link to="/">
                    <img src={Logo} alt="lucibits" className='rounded-full w-16'></img>
                </Link>
            </div>
            <ul className='flex font-semibold'>  
                
                {/* <li className='px-3 hover:transition-all hover:bg-indigo-100 hover:text-indigo-500 rounded-full'>
                  <NavLink to="/portfolio" >WORK</NavLink>
                </li> */}
                
                {/* <li className='px-2 hover:transition-all hover:bg-indigo-100 hover:text-indigo-500 rounded-full'>
                  <NavLink to="/blog">Blog</NavLink>
                </li> */}

                <li className='px-2 hover:transition-all text-indigo-500 hover:text-[#FF6057] hover:italic rounded-full'>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>

                {
                  (toggle === false) ? 
                <li className='px-2 cursor-pointer'>
                  <Unicons.UilMoon 
                  onClick={handleToggle} 
                  className="mx-1" 
                  color="#6366f1"/>
                </li> :
                <li className='px-2 cursor-pointer'>
                  <Unicons.UilSun
                  onClick={handleToggle} 
                  className="mx-1" 
                  color="#fde047"/>
                </li>
              }
            </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/lucibits2023" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>      
        <Route path="/medication-delivery" element={<MedicationDelivery />}/>
        <Route path="/patient-portal" element={<PatientPortal />}/>
        <Route path="/mb-design-system" element={<MBDesignSystem />}/>
        <Route path="/schedules" element={<Schedules />}/>
        <Route path="/cyclescheme" element={<Cyclescheme />}/>
        <Route path="/uplifter" element={<Uplifter />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<About />}/>
      </Routes>

    </main>
  );
}

export default App;
