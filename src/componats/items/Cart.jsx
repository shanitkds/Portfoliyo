import React from 'react'
import './Cart.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Cart({title, img, description, tech = [], link = "#", github = "#"}) {
  return (
    <div className='w-full pb-6 sm:pb-8 md:pb-10'>
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden cart-item border border-[#d4af37]/20 hover:border-[#d4af37] group">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-4 sm:p-5 md:p-6 cart bg-gradient-to-br from-gray-900/90 to-gray-800/90">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{title}</h2>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 line-clamp-3 leading-relaxed">
            {description || "A modern web application built with cutting-edge technologies."}
          </p>
          
          {/* Tech Stack */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
              {tech.map((techItem, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-[#d4af37]/20 text-[#f4d03f] text-xs rounded border border-[#d4af37]/30 hover:bg-[#d4af37]/30 transition-colors"
                >
                  {techItem}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-700/80 hover:bg-[#d4af37]/20 hover:border-[#d4af37] border border-transparent text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
              onClick={(e) => {
                if (github === "#") e.preventDefault();
              }}
            >
              <FaGithub className="text-sm sm:text-base" /> <span className="hidden sm:inline">Code</span>
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#0a0a0f] rounded-lg transition-all duration-300 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              onClick={(e) => {
                if (link === "#") e.preventDefault();
              }}
            >
              <FaExternalLinkAlt className="text-sm sm:text-base" /> <span className="hidden sm:inline">Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
