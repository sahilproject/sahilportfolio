"use client";
import { useEffect } from "react";
import About from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import Hero from "./Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Reviews from "./Reviews/Reviews";
import Services from "./services/page";
import Skills from "./skills/page";
import Project from "./projects/page";



interface Project {
  _id: string;
  title: string;
  description: string;
}

const Home = ({ projects }: { projects: Project[] }) => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Project projects={projects} /> 
      <Skills />
      <Services />
      <Reviews />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
