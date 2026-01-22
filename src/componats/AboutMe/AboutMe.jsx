import React from 'react';
import image from '../mainsection/black.jpg';
import './About.css';
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function AboutMe() {
  const highlights = [
    { icon: <FaGraduationCap />, text: "BCA Graduate" },
    { icon: <FaCode />, text: "Full Stack Developer" },
    { icon: <FaLightbulb />, text: "Problem Solver" },
    { icon: <FaRocket />, text: "Eager Learner" }
  ];

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-[#0a0a0f] min-h-screen relative overflow-hidden w-full py-20 px-4 sm:px-8 gap-10 lg:gap-20'>

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* 3D Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className='relative z-10 w-full max-w-md lg:max-w-xl perspective-1000'
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative group cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
            style={{ transform: "translateZ(-50px)" }}
          />
          <img
            src={image}
            alt="Mohammed Shanith"
            className='relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl object-cover z-10'
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl flex items-center gap-3 shadow-xl z-20"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-medium text-sm">Open to Work</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className='w-full max-w-2xl relative z-10 text-center lg:text-left'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white'>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Me</span>
          </h2>
          <h3 className='text-xl sm:text-2xl text-purple-400 font-medium mb-6'>
            Python Full Stack Developer
          </h3>
          <p className='text-gray-400 text-lg leading-relaxed mb-8'>
            I am a motivated and enthusiastic recent graduate with a Bachelor of Computer Applications (BCA) degree. Currently gaining practical experience as an intern in Python Full Stack Development. I have strong foundational skills in front-end technologies, including React, HTML, CSS, and JavaScript, along with Python, SQL, and Django.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm group hover:border-yellow-500/30 transition-colors"
              >
                <div className="text-2xl text-yellow-400 bg-yellow-400/10 p-3 rounded-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-gray-200 font-medium text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe