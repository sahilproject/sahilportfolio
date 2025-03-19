import { projectsInfo } from "@/Data/data";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";



const Project = () => {
  return (
    <>
      <Box id="projects" className="pt-23 pb-18 bg-[#F2F2F2] text-white">
        <Box data-aos="fade-up" className="flex justify-center">
          <h2 className="about-heading bg-heading">
            My <span style={{ color: "blue", fontSize: "35px" }}>P</span>rojects
          </h2>
        </Box>
        <Box className="text-black w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {projectsInfo.map((project) => {
            return (
              <div
                data-aos="flip-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                key={project.id}
                className="s-dow bg--950 p-2 rounded-lg "
              >
                <Link href={project.url} target="_blank">
                  <Image
                    src={project.image}
                    alt="project"
                    className="w-full rounded-lg"
                    width={300}
                    height={200}
                  />
                  <h2 className="text-center pt-3">{project.name}</h2>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <h2 className="text-center ">Live ↗️</h2>
                 
                    <a href={project.gitlurl}  target="_blank" style={{paddingTop:"1px"}}>
                      <FaGithub size={20}/>
                    </a>
                   
                  </Box>
                </Link>
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Project;
