// import { BrowserRouter } from "react-router-dom";
import Header from "./componats/header/Header"
import Mainsection from "./componats/mainsection/Mainsection";
import AboutMe from "./componats/AboutMe/AboutMe";
import Skills from "./componats/skills/Skills";
import Project from "./componats/project/Project";
import ContactInfo from "./componats/contact/ContactInfo";
import Footer from "./componats/Footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Mohammed Shanith | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Mohammed Shanith, a Python Full Stack Developer specializing in React, Django, and modern web technologies." />
          <meta name="keywords" content="Mohammed Shanith, Full Stack Developer, React Developer, Python Developer, Django, Portfolio" />
          <meta name="author" content="Mohammed Shanith" />
          <meta property="og:title" content="Mohammed Shanith | Full Stack Developer" />
          <meta property="og:description" content="Explore the portfolio of Mohammed Shanith, featuring projects in React, Django, and more." />
          <meta property="og:type" content="website" />
          {/* Add more meta tags as needed */}
        </Helmet>

        <Header />
        <div id="home"><Mainsection /></div>
        <div id="about"><AboutMe /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Project /></div>
        <div id="contact"><ContactInfo /></div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
