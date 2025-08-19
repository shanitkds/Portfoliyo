import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className='flex justify-between w-full min-h-[60px] bg-blue-500 fixed top-0 left-0 shadow-md z-50 Nav'>


      <div>
        <h3 className='ml-[30px] mt-4 font-[1000] text-2xl wh port'>Portfolio</h3>
      </div>


      {/* <div className='mt-6 text-white font-black menu' onClick={() => setShowMenu(!showMenu)}>
        <CiMenuBurger />
      </div> */}


      <div className='mr-20 mt-4 wh font-medium NavBar'>
        <Link to="/" className='mr-10 text-[#03183b] font-black item'>Home</Link>
        <Link to="/about" className='mr-10 hover:text-[#03183b] item'>About</Link>
        <Link to="/skills" className='mr-10 hover:text-[#03183b] item'>Skills</Link>
        <Link to="/project" className='mr-10 hover:text-[#03183b] item'>Project</Link>
        <Link to="/contact" className='mr-10 hover:text-[#03183b] item'>Contact</Link>
      </div>


      <div className='relative mr-10 mt-4 menu'>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='inline-flex justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20'
        >
          Options
          <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-gray-400">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>

        {showDropdown && (
          <div className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-1000'>
            <a href="#" className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'><Link to="/" >Home</Link></a>
            <a href="#" className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'><Link to="/about" >About</Link></a>
            <a href="#" className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'><Link to="/skills">Skills</Link></a>
            <button className='block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'><Link to="/project">Project</Link></button>
            <button className='block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700'><Link to="/contact">Contact</Link></button>          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
