import React from 'react';
import Cart from '../items/Cart';
import Photo from "./img3.webp";
import Photo1 from "./img4.webp";
import Photo5 from "./img5.webp";
import './project.css';
import { motion } from "framer-motion";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
    };

    return (
        <div className="bg-[#0a0a0f] min-h-screen px-4 sm:px-8 py-20 relative overflow-hidden w-full">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="text-center mb-16">
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-yellow-500"
                    >
                        Latest <span className="text-yellow-400">Projects</span>
                    </motion.h1>
                    <motion.div
                        variants={{
                            hidden: { width: 0 },
                            visible: { width: "100px", transition: { duration: 0.8, delay: 0.5 } }
                        }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-yellow-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Cart
                                title={project.title}
                                img={project.img}
                                description={project.description}
                                tech={project.tech}
                                link={project.link}
                                github={project.github}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Project
