import React, { useState, useEffect } from 'react'
import './Footer.css'
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] text-[#0a0a0f] p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 animate-pulse-slow"
                    aria-label="Scroll to top"
                >
                    <FaAngleDoubleUp className="text-xl" />
                </button>
            )}

            <footer className="bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] text-white py-8 px-4 footer border-t border-[#d4af37]/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">Mohammed Shanith</h3>
                            <p className="text-sm text-gray-200">
                                Full Stack Developer | Python | React | Django
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#f4d03f]" />
                            </a>
                            <a
                                href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-xl text-[#f4d03f]" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                                aria-label="Instagram"
                            >
                                <FaInstagramSquare className="text-xl text-[#f4d03f]" />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-6 pt-4 text-center">
                        <p className="text-sm text-gray-200">
                            © {new Date().getFullYear()} Mohammed Shanith. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-300 mt-2">
                            Built with React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
