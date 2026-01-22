import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaPython,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMysql } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact />, color: "#61DAFB", level: 90 },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 85 },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 90 },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 85 },
  { name: "Python", icon: <FaPython />, color: "#3776AB", level: 80 },
  { name: "Django", icon: <SiDjango />, color: "#092E20", level: 75 },
  { name: "SQL", icon: <FaDatabase />, color: "#4479A1", level: 70 },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 85 },
  { name: "Full Stack", icon: <FaCode />, color: "#d4af37", level: 100 },
];

const OrbitItem = ({ skill, radius, duration, delay, isMobile }) => {
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 w-full hover:border-yellow-500/50 transition-colors"
      >
        <div className="text-4xl mb-2" style={{ color: skill.color }}>{skill.icon}</div>
        <span className="text-white font-medium text-sm">{skill.name}</span>
        <div className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        width: "60px",
        height: "60px",
        top: "50%",
        left: "50%",
        marginTop: "-30px",
        marginLeft: "-30px",
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: -delay,
      }}
    >
      <motion.div
        className="relative group cursor-pointer"
        style={{
          transformOrigin: `-${radius}px 50%`,
          transform: `translateX(${radius}px)`,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-3 bg-[#0a0a0f] border-2 border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] z-20 relative group-hover:border-[#d4af37] transition-colors"
        >
          <div className="text-2xl" style={{ color: skill.color }}>{skill.icon}</div>
        </motion.div>

        <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded text-xs text-white whitespace-nowrap border border-white/10 pointer-events-none z-30">
          {skill.name}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="text-center z-10 mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Technical <span className="text-[#d4af37]">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-lg mx-auto"
        >
          A visual representation of my technical expertise and stack.
        </motion.p>
      </div>

      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 px-4 w-full max-w-2xl z-10">
          {skillsData.filter(s => s.name !== "Full Stack").map((skill, i) => (
            <OrbitItem key={i} skill={skill} isMobile={true} delay={i} />
          ))}
        </div>
      ) : (
        <div className="relative w-[800px] h-[800px] flex items-center justify-center z-10 scale-90 xl:scale-100">
          {/* Orbit Rings */}
          <div className="absolute border border-white/5 rounded-full w-[300px] h-[300px]" />
          <div className="absolute border border-white/5 rounded-full w-[500px] h-[500px]" />
          <div className="absolute border border-white/5 rounded-full w-[700px] h-[700px]" />

          {/* Central Core */}
          <motion.div
            animate={{ boxShadow: ["0 0 20px #d4af37", "0 0 50px #d4af37", "0 0 20px #d4af37"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 bg-[#0a0a0f] rounded-full border-4 border-[#d4af37] flex items-center justify-center z-20 relative shadow-[0_0_50px_rgba(212,175,55,0.4)]"
          >
            <FaCode className="text-4xl text-[#d4af37]" />
            <span className="absolute -bottom-8 text-[#d4af37] font-bold tracking-widest text-sm whitespace-nowrap">FULL STACK</span>
          </motion.div>

          {/* Inner Orbit */}
          {skillsData.slice(0, 4).map((skill, i) => (
            <OrbitItem
              key={i}
              skill={skill}
              radius={150}
              duration={20}
              delay={(20 / 4) * i}
              isMobile={false}
            />
          ))}

          {/* Middle Orbit */}
          {skillsData.slice(4, 8).map((skill, i) => (
            <OrbitItem
              key={i + 4}
              skill={skill}
              radius={250}
              duration={30}
              delay={(30 / 4) * i}
              isMobile={false}
            />
          ))}

          {/* Outer Orbit */}
          {skillsData.slice(8, 10).map((skill, i) => (
            <OrbitItem
              key={i + 8}
              skill={skill}
              radius={350}
              duration={40}
              delay={(40 / 2) * i}
              isMobile={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
