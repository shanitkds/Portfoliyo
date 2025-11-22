import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaPython, FaCss3Alt, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import "aos/dist/aos.css";

const skills = [
  { name: "React", icon: <FaReact size={40} />, color: "bg-blue-600", level: 85 },
  { name: "JavaScript", icon: <FaJs size={40} />, color: "bg-yellow-400", level: 80 },
  { name: "HTML", icon: <FaHtml5 size={40} />, color: "bg-orange-500", level: 90 },
  { name: "Python", icon: <FaPython size={40} />, color: "bg-gray-800", level: 75 },
  { name: "Django", icon: <SiDjango size={40} />, color: "bg-green-700", level: 70 },
  { name: "SQL", icon: <FaDatabase size={40} />, color: "bg-red-500", level: 75 },
  { name: "CSS", icon: <FaCss3Alt size={40} />, color: "bg-blue-400", level: 85 },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "bg-teal-500", level: 80 },
  { name: "GitHub", icon: <FaGithub size={40} />, color: "bg-gray-200", level: 70 },
];

export default function Skills() {
  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative w-full">
      {/* Premium Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none"></div>
      
      <h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12 relative z-10 px-4"
        data-aos="fade-down"
      >
        My <span className="bg-gradient-to-r from-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">Skills</span>
      </h2>

      {/* Skills Grid Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            whileHover={{ scale: 1.1, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`flex items-center justify-center ${skill.color} text-white p-4 rounded-lg mb-3`}>
              {skill.icon}
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <p className="text-gray-300 text-xs mt-1">{skill.level}%</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continuous scrolling container */}
      <div className="relative">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {scrollingSkills.map((skill, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center justify-center ${skill.color} text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-lg cursor-pointer min-w-[80px] sm:min-w-[100px] md:min-w-[120px]`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <div className="mb-2">{skill.icon}</div>
              <div>{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade overlay edges */}
        <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-r from-blue-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-l from-blue-900 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
