import React, { useEffect } from 'react'

// import Header from './componats/header/Header'
// import Mainsection from './componats/mainsection/Mainsection'
// import Footer from './componats/Footer/Footer'
// import ContactInfo from './componats/contact/ContactInfo'
import AOS from "aos";
import "aos/dist/aos.css";
// import Project from './componats/project/Project'
// import Skills from './componats/skills/Skills'
// import AboutMe from './componats/AboutMe/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import AboutMe from './componats/AboutMe/AboutMe';
import AboutPage from './Pages/AboutPage';
import SkilssPage from './Pages/SkilssPage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
  },[]);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/skills' element={<SkilssPage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
