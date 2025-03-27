"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Box } from "@mui/material";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface Project {
  _id: string;
  title: string;
  projectUrl: string;
  gitupUrl: string;
  image: string;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  console.log(projects);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "myproject"] | order(_createdAt desc) {
        _id,
        title,
        projectUrl,
        gitupUrl,
        "image": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box id="projects" className="pt-23 pb-18 bg-[#F2F2F2] text-white">
      <Box data-aos="fade-up" className="flex justify-center">
        <h2 className="about-heading bg-heading">
          My <span style={{ color: "blue", fontSize: "35px" }}>P</span>rojects
        </h2>
      </Box>

      <Box className="text-black w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projects.map((project) => (
          <div
            data-aos="flip-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={project._id}
            className="s-dow bg--950 p-2 rounded-lg"
          >
            <div className="h-[200px] flex items-center">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg"
              width={300}
              height={200}
              unoptimized={true}
            />
            </div>
            <h2 className="text-center pt-3">{project.title}</h2>
            <Box className="flex justify-center gap-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                Live ↗️
              </a>

              <a href={project.gitupUrl} target="_blank">
                <FaGithub size={20} />
              </a>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
