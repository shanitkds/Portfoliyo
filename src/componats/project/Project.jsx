import React from 'react'
import Cart from '../items/Cart'
import Photo from "./img3.webp"
import Photo1 from "./img4.webp"
import Photo5 from "./img5.webp"
import './project.css'
import "aos/dist/aos.css";

function Project() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend and Django backend, featuring user authentication, product management, and payment integration.",
            img: Photo,
            tech: ["React", "Django", "Python", "SQL"],
            link: "#",
            github: "#"
        },
        {
            title: "Task Management App",
            description: "A responsive task management application built with React and Tailwind CSS, allowing users to create, update, and organize their daily tasks efficiently.",
            img: Photo1,
            tech: ["React", "JavaScript", "Tailwind CSS"],
            link: "#",
            github: "#"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website showcasing my projects and skills, built with React and featuring smooth animations and transitions.",
            img: Photo5,
            tech: ["React", "CSS", "JavaScript"],
            link: "#",
            github: "#"
        },
        {
            title: "Blog Application",
            description: "A dynamic blog platform with CRUD operations, user comments, and admin panel, developed using Django and React for a seamless user experience.",
            img: Photo1,
            tech: ["Django", "React", "Python", "SQL"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] min-h-screen sm:min-h-[800px] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 project-main relative overflow-hidden w-full">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#d4af37] rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#6c5ce7] rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-blob animation-delay-2000"></div>
            </div>
            
            {/* Premium Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none"></div>

            <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold mb-6 sm:mb-8 md:mb-12 text-center project-h1 relative z-10 px-4"
                data-aos="fade-down"
            >
                Latest <span className="bg-gradient-to-r from-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">Projects</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center card max-w-7xl mx-auto relative z-10 px-4 sm:px-0 w-full">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                        data-aos-delay={index * 100}
                    >
                        <Cart 
                            title={project.title} 
                            img={project.img}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            github={project.github}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
