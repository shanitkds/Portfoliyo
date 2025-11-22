import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import './Header.css';
import { Link } from "react-scroll";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex justify-between items-center w-full min-h-[60px] sm:min-h-[70px] bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] fixed top-0 left-0 shadow-[0_4px_30px_rgba(212,175,55,0.2)] z-50 Nav backdrop-blur-md bg-opacity-95 border-b border-[#d4af37]/20 px-4 sm:px-6'>


      <div>
        <h3 className='ml-2 sm:ml-[30px] font-[1000] text-lg sm:text-xl md:text-2xl wh port'>Portfolio</h3>
      </div>


      {/* <div className='mt-6 text-white font-black menu' onClick={() => setShowMenu(!showMenu)}>
        <CiMenuBurger />
      </div> */}


      {/* <div className='mr-20 mt-4 wh font-medium NavBar'>
        <Link to="/" className='mr-10 text-[#03183b] font-black item'>Home</Link>
        <Link to="about" className='mr-10 hover:text-[#03183b] item'>About</Link>
        <Link to="/skills" className='mr-10 hover:text-[#03183b] item'>Skills</Link>
        <Link to="/project" className='mr-10 hover:text-[#03183b] item'>Project</Link>
        <Link to="/contact" className='mr-10 hover:text-[#03183b] item'>Contact</Link>
      </div> */}
      <div className='hidden md:flex mr-4 lg:mr-20 mt-4 wh font-medium NavBar'>
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className={`mr-4 lg:mr-10 item cursor-pointer transition-all duration-300 text-sm lg:text-base ${
            activeSection === 'home' ? 'text-[#f4d03f] font-black border-b-2 border-[#d4af37] pb-1' : 'hover:text-[#f4d03f]'
          }`}
        >
          Home
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={800} 
          className={`mr-4 lg:mr-10 item cursor-pointer transition-all duration-300 text-sm lg:text-base ${
            activeSection === 'about' ? 'text-[#f4d03f] font-black border-b-2 border-[#d4af37] pb-1' : 'hover:text-[#f4d03f]'
          }`}
        >
          About
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={800} 
          className={`mr-4 lg:mr-10 item cursor-pointer transition-all duration-300 text-sm lg:text-base ${
            activeSection === 'skills' ? 'text-[#f4d03f] font-black border-b-2 border-[#d4af37] pb-1' : 'hover:text-[#f4d03f]'
          }`}
        >
          Skills
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={800} 
          className={`mr-4 lg:mr-10 item cursor-pointer transition-all duration-300 text-sm lg:text-base ${
            activeSection === 'projects' ? 'text-[#f4d03f] font-black border-b-2 border-[#d4af37] pb-1' : 'hover:text-[#f4d03f]'
          }`}
        >
          Project
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={800} 
          className={`mr-4 lg:mr-10 item cursor-pointer transition-all duration-300 text-sm lg:text-base ${
            activeSection === 'contact' ? 'text-[#f4d03f] font-black border-b-2 border-[#d4af37] pb-1' : 'hover:text-[#f4d03f]'
          }`}
        >
          Contact
        </Link>
      </div>


      <div className='relative mr-2 sm:mr-4 md:mr-10 mt-2 sm:mt-4 menu'>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
            className='inline-flex justify-center gap-x-1.5 rounded-md bg-[#d4af37]/20 px-3 py-2 text-sm font-semibold text-[#f4d03f] hover:bg-[#d4af37]/30 border border-[#d4af37]/30'
        >
          Menu
          <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-gray-400">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>

        {showDropdown && (
          <div className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-[#1a1a2e] border border-[#d4af37]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-1000 backdrop-blur-md'>
            <div 
                className={`block px-4 py-2 text-sm text-gray-300 hover:bg-[#d4af37]/20 hover:text-[#f4d03f] cursor-pointer transition-all duration-300 ${
                 activeSection === 'home' ? 'bg-[#d4af37]/20 text-[#f4d03f]' : ''
               }`}
              onClick={() => setShowDropdown(false)}
            >
              <Link to="home" smooth={true} duration={800}>Home</Link>
            </div>
            <div 
                className={`block px-4 py-2 text-sm text-gray-300 hover:bg-[#d4af37]/20 hover:text-[#f4d03f] cursor-pointer transition-all duration-300 ${
                 activeSection === 'about' ? 'bg-[#d4af37]/20 text-[#f4d03f]' : ''
               }`}
              onClick={() => setShowDropdown(false)}
            >
              <Link to="about" smooth={true} duration={800}>About</Link>
            </div>
            <div 
                className={`block px-4 py-2 text-sm text-gray-300 hover:bg-[#d4af37]/20 hover:text-[#f4d03f] cursor-pointer transition-all duration-300 ${
                 activeSection === 'skills' ? 'bg-[#d4af37]/20 text-[#f4d03f]' : ''
               }`}
              onClick={() => setShowDropdown(false)}
            >
              <Link to="skills" smooth={true} duration={800}>Skills</Link>
            </div>
            <div 
                className={`block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#d4af37]/20 hover:text-[#f4d03f] cursor-pointer transition-all duration-300 ${
                 activeSection === 'projects' ? 'bg-[#d4af37]/20 text-[#f4d03f]' : ''
               }`}
              onClick={() => setShowDropdown(false)}
            >
              <Link to="projects" smooth={true} duration={800}>Project</Link>
            </div>
            <div 
                className={`block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#d4af37]/20 hover:text-[#f4d03f] cursor-pointer transition-all duration-300 ${
                 activeSection === 'contact' ? 'bg-[#d4af37]/20 text-[#f4d03f]' : ''
               }`}
              onClick={() => setShowDropdown(false)}
            >
              <Link to="contact" smooth={true} duration={800}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
