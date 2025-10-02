import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import MyPhoto from "./black.jpg";
import cv from "../../../public/CV.pdf";
import "aos/dist/aos.css";

function Mainsection() {
  const Download = () => {
    const link = document.createElement("a");
    link.href = cv; // ✅ fixed
    link.download = "Shanith-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0067CC] flex flex-col-reverse sm:flex-row items-center sm:justify-between h-[950px] px-6 sm:px-12 text-white max-sm:w-[410px]">
      {/* Text Section */}
      <div
        className="pb-10 sm:w-1/2 mt-12 text-left flex flex-col items-start sm:pt-24 max-sm:items-center max-sm:text-center"
        data-aos="fade-right"
      >
        <div className="text-lg sm:text-2xl font-bold">Hi, Myself</div>
        <div className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Mohammed Shanith
        </div>
        <div className="text-lg sm:text-2xl font-semibold mt-2">
          And I'm a{" "}
          <span className="text-yellow-300">Full Stack Developer</span>
        </div>
        <p className="mt-4 text-sm sm:text-base max-w-lg">
          I am a motivated BCA graduate and a Python Full Stack Development
          intern with skills in React, HTML, CSS, JavaScript, Python, SQL, and
          Django. I am passionate about problem-solving and eager to apply my
          skills in a dynamic role.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="p-2 border-2 border-white rounded-full hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#0067CC] transition duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="#"
            className="p-2 border-2 border-white rounded-full hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#0067CC] transition duration-300"
          >
            <FaInstagramSquare className="text-2xl" />
          </a>
          <a
            href="http://www.linkedin.com/in/mohammed-shanith-m-0377a327a"
            className="p-2 border-2 border-white rounded-full hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#0067CC] transition duration-300"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>

        {/* Download CV Button */}
        <button
          className="btn mt-6 px-6 py-2 text-[#0067CC] font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          
          onClick={Download}
        >
          Download CV
        </button>
      </div>

      {/* Image Section */}
      <div data-aos="zoom-in" className="sm:w-1/2 flex justify-center ">
        <img
          src={MyPhoto}
          alt="profile"
          className=" w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full object-cover shadow-2xl animate-[floatImage_4s_ease-in-out_infinite]"
        />
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes floatImage {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Mainsection;
