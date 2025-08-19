import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className=" bg-blue-500 text-white text-center py-3 text-sm footer">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer
