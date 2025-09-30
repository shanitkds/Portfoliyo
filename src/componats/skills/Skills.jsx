import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaPython, FaCss3Alt, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} />, color: "bg-blue-600" },
  { name: "JavaScript", icon: <FaJs size={40} />, color: "bg-yellow-400" },
  { name: "HTML", icon: <FaHtml5 size={40} />, color: "bg-orange-500" },
  { name: "Python", icon: <FaPython size={40} />, color: "bg-gray-800" },
  { name: "SQL", icon: <FaDatabase size={40} />, color: "bg-red-500" },
  { name: "CSS", icon: <FaCss3Alt size={40} />, color: "bg-blue-400" },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "bg-teal-500" },
  { name: "GitHub", icon: <FaGithub size={40} />, color: "bg-gray-200" },
];

export default function Skills() {
  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="bg-blue-900 py-16 sm:py-20 md:py-24 overflow-hidden relative max-sm:w-103">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 sm:mb-12">
        My <span className="text-yellow-300">Skills</span>
      </h2>

      {/* Continuous scrolling container */}
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // slow continuous scroll
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

      {/* Optional fade overlay edges */}
      <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 h-full bg-blue-900 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-full bg-blue-900 pointer-events-none"></div>
    </div>
  );
}
