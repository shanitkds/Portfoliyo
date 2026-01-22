import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";
import MyPhoto from "./black.jpg";
import cv from "../../../public/CV.pdf";
import { motion } from "framer-motion";

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

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5 + i * 0.2,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="bg-[#0a0a0f] flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-4 sm:px-8 md:px-16 text-white w-full relative overflow-hidden">

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4"
        >
          <span className="px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 font-medium tracking-wider text-sm">
            HELLO, I'M
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Mohammed</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Shanith</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 h-10 mb-8"
        >
          And I'm a <span className="text-white">{displayText}</span>
          <span className="inline-block w-1 h-8 ml-1 bg-yellow-500 animate-pulse align-middle"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-gray-400 max-w-lg text-lg leading-relaxed mb-10"
        >
          I am a motivated BCA graduate and a Python Full Stack Development intern with skills in React, HTML, CSS, JavaScript, Python, SQL, and Django.
        </motion.p>

        <div className="flex gap-6 items-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={Download}
            className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            Download CV
          </motion.button>

          <div className="flex gap-4">
            {[
              { Icon: FaGithub, href: "https://github.com" },
              { Icon: FaInstagramSquare, href: "https://instagram.com" },
              { Icon: FaLinkedinIn, href: "http://www.linkedin.com/in/mohammed-shanith-m-0377a327a" }
            ].map((social, index) => (
              <motion.a
                key={index}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5, color: "#eab308" }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg border border-white/10 text-white hover:border-yellow-500/50 transition-colors"
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-12 lg:mt-0"
      >
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] group">
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full border-2 border-white/10 p-4 backdrop-blur-sm"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-yellow-500/20 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent mix-blend-overlay z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <img
                src={MyPhoto}
                alt="Mohammed Shanith"
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-yellow-500/10 rounded-full scale-110 border-dashed"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Mainsection;
