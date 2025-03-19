import { baseInfo } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
<div className="w-full pt-[29vh]  md:pt-[12vh] h-screen bg-[#F2F2F2] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">
          {/* text content  */}
          <div>
            <h2
             
              data-aos="fade-right"
              className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold typewriter-loop overflow-hidden whitespace-nowrap"
            >
              I am {baseInfo.name}
            </h2>
            <h2
              data-aos="fade-left"
              className="shining-text text-bg text-3xl sm:text-4xl md:text-5xl lg:text-7xl  xl:text-7xl font-bold md:leading-[3.5rem] xl:leading
                -[14rem] text-white"
            >
              {baseInfo.position}
            </h2>
            <p
              data-aos="fade-up"
              className="mt-6 text-sm md:text-base text-gray text-opacity-60"
            >
              {baseInfo.description}
            </p>
            <button
              data-aos="fade-up"
              className=" md:px-8 md:py-2.5 px-6 py-1.5 text-black font-semibold text-sm md:text-lg transition-al duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex item-center space-x-2 "
              style={{
                color:"white",
                height: "100%",
                background:
               "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgb(20, 171, 252) 50%, rgba(255,255,255,0) 100%)",
              }}
            >
              <Link
                href={
                  "https://drive.google.com/file/d/1Cy0fO_QtQF_zNN3RGz6RzDW54XSWNA-7/view?usp=sharing"
                }
              >
                <span className="cursor-pointer">Download CV</span>
              </Link>
              <FaDownload />
            </button>
            <button
              data-aos="fade-right"
              className="hire-me md:px-10 md:py-3 px-8 py-3 my-3  font-semibold  sm:text-base text-sm  transition-all duration-200 rounded-lg overflow-hidden"
            >
              <Link href={"mailto:sahilrahaman585@gmail.com"}>
                <span className="inline-block animate-slide">Contact me</span>
              </Link>
            </button>
          </div>

          {/* image  */}
          <div
            data-aos="zoom-out-down"
            className="hero-img mx-auto lg:block rounded-[1rem]  overflow-x-hidden"
          >
            <Image
              src={baseInfo.profilePic}
              alt={baseInfo.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
