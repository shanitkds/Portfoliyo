
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import blackImg from './components/photo/black.jpg';
import'./Mainsection.css'
import MyPhoto from "./black.jpg"
import cv from "../../../public/CV.pdf"




function Mainsection() {
  const Download=()=>{
      const link = document.createElement("a");   
    link.href = {cv};                     
    link.download = "Shanith-CV.pdf";           
    document.body.appendChild(link);
    link.click();                             
    document.body.removeChild(link);   
    console.log("hai");
    
  }
  
  return (
    <div className="bg-[#0067CC] flex h-dvh main-body ">
      <div className='w-1/2 mt-50 ml-15 item-body' data-aos="fade-right ">
        <div className='text-[25px] font-[700] main-hi '>Hi,Myself</div>
        <div className='text-[45px] font-[900] leading-none main-shanith'>Mohammed Shanith</div>
        <div className='text-[25px] font-[700] '>And I'm a <span>Python Developer</span></div>
        <div className='mb-4 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi,
             voluptates nobis aperiam, explicabo quisquam consequatur error excepturi illum 
             officiis amet a temporibus! Nihil maiores voluptatem, suscipit dolores 
             explicabo rerum.
        </div>
        <div className='flex ml-3 icon-div'>
          <a href="" className='icon'><FaGithub className='icons'/></a>
          <a href="" className='icon'><FaInstagramSquare className='icons' /></a>
          <a href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a" className='icon'>
          <FaLinkedinIn className='icons'/></a>
        </div>
        <div><button className='btn mt-4' onClick={Download}>Download CV</button></div>
      </div>
      
      <div data-aos="fade-left" >
        <img src={MyPhoto} alt="efrerf" className='home-image img1 '/>
      </div>
    </div>
  )
}

export default Mainsection
