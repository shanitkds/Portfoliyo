import React from 'react'
import Cart from '../items/Cart'
import Photo from "./img3.webp"
import Photo1 from "./img4.webp"
import Photo5 from "./img5.webp"
import './project.css'

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
                <Cart title={"My Project"} img={Photo} />
                <Cart title={"My Project"} img={Photo1} />
                <Cart title={"My Project"} img={Photo5} />
                <Cart title={"My Project"} img={Photo1} />
            </div>
        </div>

    )
}

export default Project
