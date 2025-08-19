import React from "react";
import './Skill.css'
const logos = [
  { name: "React", color: "colr-blue-600" },
  { name: "Js", color: "bg-indigo-500" },
  { name: "HTML", color: "bg-pink-500" },
  { name: "Python", color: "bg-gray-800" },
  { name: "Sql", color: "bg-red-500" },
  { name: "Css", color: "bg-blue-400" },
  { name: "Tail Wint", color: "bg-red-700" },
];

export default function Skills() {
  return (
    <div className="bg-blue-900 skill-main">
  <main className="relative min-h-screen flex flex-col justify-center overflow-hidden font-inter skill-sub">
      <div className=" text-7xl font-bold text-center">My <span>Skills</span></div>

    <div className="w-full  max-w-5xl mx-auto px-4 md:px-6 py-24 text-center">
      <div className="w-full overflow-hidden relative h-50">
        <ul className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <li key={i} className="inline-block mx-12">
              <div>
                <div className="text-5xl font-semibold">{logo.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
</div>

    
  );
}
