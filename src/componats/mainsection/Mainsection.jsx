import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";
import MyPhoto from "./black.jpg";
import cv from "../../../public/CV.pdf";
import "aos/dist/aos.css";

function Mainsection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Reset after a delay
        setTimeout(() => {
          setDisplayText("");
          setIsTyping(true);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping, fullText]);

  const Download = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Shanith-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] flex flex-col-reverse sm:flex-row items-center sm:justify-between min-h-screen sm:min-h-[950px] sm:h-dvh px-4 sm:px-6 md:px-12 text-white w-full relative overflow-hidden">
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#d4af37] rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#6c5ce7] rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#0984e3] rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-[#f4d03f] rounded-full mix-blend-soft-light filter blur-[100px] opacity-5 animate-blob animation-delay-1000"></div>
      </div>
      
      {/* Premium Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none"></div>

      {/* Text Section */}
      <div
        className="pb-8 sm:pb-10 w-full sm:w-1/2 mt-8 sm:mt-12 sm:pt-24 flex flex-col sm:items-start items-center sm:text-left text-center relative z-10 px-4 sm:px-0"
        data-aos="fade-right"
      >
        <div className="text-base sm:text-lg md:text-2xl font-bold mb-2 animate-fade-in text-[#d4af37]" data-aos="fade-right" data-aos-delay="100" style={{letterSpacing: '1px'}}>HI, MYSELF</div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3" data-aos="fade-right" data-aos-delay="200">
          <span className="bg-gradient-to-r from-white via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
            Mohammed Shanith
          </span>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 min-h-[1.5rem] sm:min-h-[2rem]" data-aos="fade-right" data-aos-delay="300">
          And I'm a{" "}
          <span className="text-[#f4d03f] inline-block animate-bounce-subtle font-bold">
            {displayText}
            {isTyping && <span className="animate-pulse text-[#d4af37]">|</span>}
          </span>
        </div>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed text-gray-300 font-light px-2 sm:px-0">
          I am a motivated BCA graduate and a Python Full Stack Development
          intern with skills in React, HTML, CSS, JavaScript, Python, SQL, and
          Django. I am passionate about problem-solving and eager to apply my
          skills in a dynamic role.
        </p>

        {/* Premium Social Icons */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 border-2 border-[#d4af37]/30 rounded-full bg-white/5 backdrop-blur-md hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:rotate-12 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl sm:text-2xl text-[#f4d03f]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 border-2 border-[#d4af37]/30 rounded-full bg-white/5 backdrop-blur-md hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:rotate-12 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            aria-label="Instagram"
          >
            <FaInstagramSquare className="text-xl sm:text-2xl text-[#f4d03f]" />
          </a>
          <a
            href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 border-2 border-[#d4af37]/30 rounded-full bg-white/5 backdrop-blur-md hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:rotate-12 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl sm:text-2xl text-[#f4d03f]" />
          </a>
        </div>

        {/* Premium Download CV Button */}
        <button
          className="btn mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 w-full sm:w-auto"
          onClick={Download}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Download CV
        </button>
      </div>

      {/* Premium Image Section */}
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full sm:w-1/2 flex justify-center relative z-10 mt-6 sm:mt-0 px-4 sm:px-0">
        <div className="relative group">
          {/* Premium Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7] to-[#0984e3] rounded-full blur-xl sm:blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
          
          {/* Premium Border Ring */}
          <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500"></div>
          
          <img
            src={MyPhoto}
            alt="Mohammed Shanith - Full Stack Developer"
            className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full object-cover shadow-[0_0_40px_rgba(212,175,55,0.4)] sm:shadow-[0_0_60px_rgba(212,175,55,0.4)] border-4 border-[#d4af37]/50 group-hover:border-[#f4d03f] transition-all duration-500 animate-[floatImage_4s_ease-in-out_infinite]"
          />
          
          {/* Premium Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Premium Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes floatImage {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Mainsection;
