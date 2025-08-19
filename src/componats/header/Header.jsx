import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { div, table } from 'motion/react-m';

function Header() {
  const [showMenu, setShoeMenu] = useState(false)
  const navigate = useNavigate
  return (
      <div className='flex justify-between w-full min-h-15 bg-blue-500 fixed top-0 left-0 shadow-md z-50 Nav'>
        <div>
          <h3 className='ml-30 mt-4 font-[1000] text-2xl wh port'>Portfolio</h3>
        </div>
        <div className='mt-6 text-white font-black menu ' onClick={() => setShoeMenu(!showMenu)}>
          <CiMenuBurger />
        </div>
        <div className='mr-20 mt-4 wh font-medium NavBar'>
          <Link to="/" className='mr-10 text-[#03183b] font-black item' >Home</Link>
          <Link to="/about" className='mr-10  hover:text-[#03183b] item'>About</Link>
          <Link to="/skills" className='mr-10  hover:text-[#03183b] item'>Skills</Link>
          <Link to="/project" className='mr-10  hover:text-[#03183b] item'>Project</Link>
          <Link to="/contact" className='mr-10  hover:text-[#03183b] item'>Contact</Link>
        </div>
        <div>
          {showMenu && (
          <table className="border-1 border-black bg-amber-200 ">
            <tr className="border border-black h-[5px]">
              <Link to="/" className='mr-10 text-[#03183b] font-black item' >Home</Link>
            </tr>
            <tr>
              <Link to="/about" className='mr-10  hover:text-[#03183b] item'>About</Link>
            </tr>
            <tr>
              <Link to="/skills" className='mr-10  hover:text-[#03183b] item'>Skills</Link>
            </tr>
            <tr>
              <Link to="/project" className='mr-10  hover:text-[#03183b] item'>Project</Link>
            </tr>
            <tr>
              <Link to="/contact" className='mr-10  hover:text-[#03183b] item'>Contact</Link>
            </tr>
          </table>)}
        </div>
      </div>

  )
}



export default Header
