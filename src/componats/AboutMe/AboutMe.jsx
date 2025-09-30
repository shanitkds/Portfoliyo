import { div } from 'motion/react-client'
import React from 'react'
import image from '../mainsection/black.jpg'
import './About.css'

function AboutMe() {
  return (
    <>
      <div className='flex  bg-blue-500 h-dvh AboutMain'>
        <div className='mt-40 ml-30'><img src={ image } alt="" className='rounded-lg border-6 border-[#200353] w-[550px] about-img'/></div>
        <div className='mt-70 ml-30 sub-about'>
            <div className='text-[50px] font-bold '>About <span>Me</span></div>
            <div className='text-[30px] font-medium mb-5'>Python Full Stack Developer</div>
            <div className='text-[17px]'>I am a motivated and enthusiastic recent graduate with a Bachelor of Computer Applications (BCA) degree. I am currently gaining practical experience as an intern in Python Full Stack Development. I have strong foundational skills in front-end technologies, including React, HTML, CSS, and JavaScript. Additionally, I have a basic understanding of Python, SQL, and Django. I am passionate about problem-solving and eager to apply my skills in a challenging, dynamic role.</div>
        </div>
      </div>
    </>
  )
}

export default AboutMe