import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function Cart({ title, img, description, tech, link, github }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#1a1a2e]/80 border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 group relative w-full h-full flex flex-col"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      />

      <div className="relative h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute top-2 right-2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
            <FaGithub size={18} className="text-white" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
            <FaExternalLinkAlt size={16} className="text-white" />
          </a>
        </div>
      </div>

      <div
        className="p-6 relative z-10 flex flex-col flex-grow"
        style={{ transform: "translateZ(20px)" }}
      >
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech && tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-yellow-500 bg-yellow-500/10 rounded-md border border-yellow-500/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
