// import { BrowserRouter } from "react-router-dom";
import Header from "./componats/header/Header"
import Mainsection from "./componats/mainsection/Mainsection";
import AboutMe from "./componats/AboutMe/AboutMe";
import Skills from "./componats/skills/Skills";
import Project from "./componats/project/Project";
import ContactInfo from "./componats/contact/ContactInfo";
import Footer from "./componats/Footer/Footer";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect
  (() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <Header/>
      <div id="home"><Mainsection /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Project /></div>
      <div id="contact"><ContactInfo /></div>
      <Footer/>
    </div>
  );
}

export default App;
