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
            <div className='text-[30px] font-medium mb-5'>Python Developer</div>
            <div className='text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, non? Facilis accusantium quae fugit. Accusamus, assumenda perferendis magnam, sunt recusandae optio debitis similique sequi laborum neque odit animi ut aperiam?</div>
        </div>
      </div>
    </>
  )
}

export default AboutMe