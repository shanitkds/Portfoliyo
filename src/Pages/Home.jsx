import React from 'react'
import Header from '../componats/header/Header'
import Mainsection from '../componats/mainsection/Mainsection'
import AboutMe from '../componats/AboutMe/AboutMe'
import Skills from '../componats/skills/Skills'
import Project from '../componats/project/Project'
import Footer from '../componats/Footer/Footer'
import ContactInfo from '../componats/contact/ContactInfo'
// import { GrContactInfo } from 'react-icons/gr'


function Home() {
  return (
    <>
     <Header/>
      <Mainsection/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default Home