import React from "react";
import "./About.css";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";



const About = () => {
  return (
    <>
    <div id="about" className="pt-25 pb-10 bg-[#ececec] text-white ">
      <div data-aos="fade-up" className="flex justify-center" >
        <h2 className="about-heading bg-heading">
          <span>About </span>
          <span style={{ color: "blue", fontSize: "35px" }}>m</span>
          <span>e</span>
        </h2>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 item-center mt-7">
      
        <div>
          <h2 data-aos="fade-right" className="text-bg text-[26px] mt-10 sm:text-3xl md:text-4xk lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h2>
          <p data-aos="fade-right" className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
        <div data-aos="fade-left">
            <Image src={"/images/s-customer.png"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.client}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customer</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/exprience.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.exprience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Years Exprience</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/project-completion.png"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Completed Project</p>
        </div>
        <div data-aos="fade-left">
            <Image src={"/images/live.webp"} alt="image" width={80} height={90} className="mx-auto"/>
            <p className="mt-3 font-bold text-xl text-black text-center">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Website Live</p>
        </div>
      </div>
      </div>
      <div data-aos="fade-left" className="flex justify-center text-[blue] pt-7 text-bold ">
        <h3><span className="text-2xl shining-text">All about me !</span><span><button
              data-aos="fade-up"
              className=" md:px-8 md:py-2.5 px-6 py-1.5 text-black font-semibold text-sm md:text-lg transition-al duration-200 rounded-lg mt-2 bg-blue-700 hover:bg-blue-900 flex item-center space-x-2 "
              style={{
                color:"white",
                background:
               "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgb(50, 213, 0) 50%, rgba(255,255,255,0) 100%)",
              }}
            >
              <Link
                href={
                  "https://drive.google.com/file/d/1Cy0fO_QtQF_zNN3RGz6RzDW54XSWNA-7/view?usp=sharing"
                }
              >
                <span className="cursor-pointer">See CV</span>
              </Link>
              <FaDownload />
            </button></span></h3> 
        </div>
    </div>
      
      
      </>
  );
};

export default About;
