
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import blackImg from './components/photo/black.jpg';
import './Mainsection.css'
import MyPhoto from "./black.jpg"
import cv from "../../../public/CV.pdf"




function Mainsection() {
  const Download = () => {
    const link = document.createElement("a");
    link.href = { cv };
    link.download = "Shanith-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("hai");

  }

  return (
    <div className="bg-[#0067CC] flex h-dvh main-body ">
      <div
        className="w-1/2 mt-12 ml-6 item-body text-left flex flex-col items-start sm:pt-22"
        data-aos="fade-right"
      >
        <div className="text-[25px] font-[700] main-hi">Hi, Myself</div>
        <div className="text-[45px] font-[900] leading-none main-shanith">
          Mohammed Shanith
        </div>
        <div className="text-[25px] font-[700]">
          And I'm a <span className="text-yellow-300">Full Stack Developer</span>
        </div>
        <div className="mb-4 mt-4">
          I am a motivated BCA graduate and a Python Full Stack Development intern with skills in React, HTML, CSS, JavaScript, Python, SQL, and Django. I am passionate about problem-solving and eager to apply my skills in a dynamic role.
        </div>

        <div className="flex gap-4 mt-2">
          <a href="#" className="icon">
            <FaGithub className="icons" />
          </a>
          <a href="#" className="icon">
            <FaInstagramSquare className="icons" />
          </a>
          <a
            href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a"
            className="icon"
          >
            <FaLinkedinIn className="icons" />
          </a>
        </div>

        <div>
          <button className="btn mt-4" onClick={Download}>
            Download CV
          </button>
        </div>
      </div>


      <div data-aos="fade-left" >
        <img src={MyPhoto} alt="efrerf" className='home-image img1 ' />
      </div>
    </div>
  )
}

export default Mainsection
