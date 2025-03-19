
// import { skills } from "@/Data/data";
// import Image from "next/image";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// interface skillsType{
//   id: number;
//   title: string;
//   image: string;
//   percent: number;
// }


// const Skills = () => {
//   return (
//     <div className="pt-15 pb-16 bg-[#ececec]">
//       {/* Heading */}
//       <div data-aos="fade-up" className="flex justify-center text-white">
//         <h2 className="about-heading bg-heading">
//           <span style={{ color: "blue", fontSize: "36px" }}>S</span>kills
//         </h2>
//       </div>

//       {/* Skills Grid */}
//       <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
//         {skills.map((skill:skillsType) => (
//           <div
//             key={skill.id}
//             data-aos="flip-up"
//             className="p-6 duration-300 transition-all cursor-pointer text-center rounded-lg s-dow bg-white shadow-lg"
//           >
//             <Image
//               src={skill.image}
//               alt={skill.title}
//               width={80}
//               height={80}
//               className="object-cover mx-auto"
//             />
//             <h1 className="text-[18px] mt-4 text-black font-[600]">
//               {skill.title}
//             </h1>

//             <div className="w-14 h-14 mx-auto mt-4 relative flex items-center justify-center">
//               <CircularProgressbar
//                 value={skill.percent}
//                 styles={buildStyles({
//                   pathColor: "#4CAF50",
//                   trailColor: "#ddd",
//                   textColor: "transparent",
//                 })}
//               />
//               <div className="absolute text-[13px] font-bold text-black">
//                 {skill.percent}%
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;


"use client"

import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface SkillsType {
  id: number;
  title: string;
  image: string;
  percent: number;
}

const skills: SkillsType[] = [
  {
    id: 1,
    title: "React",
    image: "/images/react.svg",
    percent: 90,
  },
  {
    id: 2,
    title: "Next.js",
    image: "/images/Next.js.svg",
    percent: 60,
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
    percent: 85,
  },
  {
    id: 4,
    title: "React Bootstrap",
    image: "/images/r-bootstrap.svg",
    percent: 85,
  },
  {
    id: 5,
    title: "Material UI",
    image: "/images/mui.png",
    percent: 90,
  },
  {
    id: 6,
    title: "Supabase",
    image: "/images/supabase.jpg",
    percent: 80,
  },
  {
    id: 7,
    title: "HTML",
    image: "/images/html.svg",
    percent: 80,
  },
  {
    id: 8,
    title: "CSS",
    image: "/images/css.svg",
    percent: 80,
  },
  {
    id: 9,
    title: "TypeScript",
    image: "/images/ts.svg",
    percent: 65,
  },
  {
    id: 10,
    title: "SASS",
    image: "/images/Sass.svg",
    percent: 60,
  },
];

const Skills: React.FC = () => {
  return (
    <div className="pt-15 pb-16 bg-[#ececec]">
      {/* Heading */}
      <div data-aos="fade-up" className="flex justify-center text-white">
        <h2 className="about-heading bg-heading">
          <span style={{ color: "blue", fontSize: "36px" }}>S</span>kills
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            data-aos="flip-up"
            className="p-6 duration-300 transition-all cursor-pointer text-center rounded-lg s-dow bg-white shadow-lg"
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={80}
              height={80}
              className="object-cover mx-auto"
            />
            <h1 className="text-[18px] mt-4 text-black font-[600]">
              {skill.title}
            </h1>

            <div className="w-14 h-14 mx-auto mt-4 relative flex items-center justify-center">
              <CircularProgressbar
                value={skill.percent}
                styles={buildStyles({
                  pathColor: "#4CAF50",
                  trailColor: "#ddd",
                  textColor: "transparent",
                })}
              />
              <div className="absolute text-[13px] font-bold text-black">
                {skill.percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
