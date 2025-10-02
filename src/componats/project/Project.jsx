import React from 'react'
import Cart from '../items/Cart'
import Photo from "./img3.webp"
import Photo1 from "./img4.webp"
import Photo5 from "./img5.webp"
import './project.css'
import "aos/dist/aos.css";

function Project() {
    return (
        <div className="bg-blue-500 h-[800px] px-20 py-12 project-main">
            
            <h1
                className="text-[55px] font-extrabold mb-12 project-h1"
                data-aos="fade-down-right"
            >
                Latest <span className="text-yellow-300">Project</span>
            </h1>

            
            <div className="flex gap-8 flex-wrap card">
                <div data-aos="zoom-in-right"><Cart title={"My Project"} img={Photo} /></div>
                <div  data-aos="zoom-out-up"><Cart title={"My Project"} img={Photo1} /></div>
                <div  data-aos="zoom-out-down"><Cart title={"My Project"} img={Photo5} /></div>
                <div data-aos="zoom-out"><Cart title={"My Project"} img={Photo1} /></div>
            </div>
        </div>

    )
}

export default Project
