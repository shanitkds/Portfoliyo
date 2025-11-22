import React from 'react'
import image from '../mainsection/black.jpg'
import './About.css'
import "aos/dist/aos.css";
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket } from "react-icons/fa";

function AboutMe() {
  const highlights = [
    { icon: <FaGraduationCap />, text: "BCA Graduate" },
    { icon: <FaCode />, text: "Full Stack Developer" },
    { icon: <FaLightbulb />, text: "Problem Solver" },
    { icon: <FaRocket />, text: "Eager Learner" }
  ];

  return (
    <>
      <div className='flex flex-col sm:flex-row items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] min-h-screen sm:min-h-dvh AboutMain px-4 sm:px-6 md:px-12 py-8 sm:py-12 relative overflow-hidden w-full'>
        {/* Premium Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#d4af37] rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-blob"></div>
          <div className="absolute bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#6c5ce7] rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-blob animation-delay-2000"></div>
        </div>
        
        {/* Premium Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none"></div>

        <div className='w-full sm:w-auto sm:mt-40 sm:ml-30 mb-6 sm:mb-8 md:mb-0 relative z-10 px-4 sm:px-0' data-aos="fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] rounded-lg blur-lg sm:blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-[#6c5ce7] to-[#0984e3] rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <img 
              src={image} 
              alt="Mohammed Shanith" 
              className='relative rounded-lg border-2 sm:border-4 border-[#d4af37]/40 w-full max-w-full sm:max-w-[550px] md:w-[850px] h-auto sm:h-[300px] md:h-[400px] about-img object-cover shadow-[0_0_30px_rgba(212,175,55,0.3)] sm:shadow-[0_0_50px_rgba(212,175,55,0.3)] transform transition duration-500 group-hover:scale-105'
            />
          </div>
        </div>
        <div className='w-full sm:w-auto sm:mt-70 sm:ml-30 sub-about max-w-2xl relative z-10 px-4 sm:px-0' data-aos="fade-down">
            <div className='text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold mb-3 sm:mb-4 text-center sm:text-left'>
              About <span className="bg-gradient-to-r from-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">Me</span>
            </div>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium mb-4 sm:mb-5 text-[#d4af37] text-center sm:text-left'>
              Python Full Stack Developer
            </div>
            <div className='text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300 font-light text-center sm:text-left'>
              I am a motivated and enthusiastic recent graduate with a Bachelor of Computer Applications (BCA) degree. I am currently gaining practical experience as an intern in Python Full Stack Development. I have strong foundational skills in front-end technologies, including React, HTML, CSS, and JavaScript. Additionally, I have a basic understanding of Python, SQL, and Django. I am passionate about problem-solving and eager to apply my skills in a challenging, dynamic role.
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-md rounded-xl border border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#f4d03f] mb-2 sm:mb-3 transform hover:rotate-12 transition-transform duration-500">
                    {highlight.icon}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-center text-gray-200">
                    {highlight.text}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe