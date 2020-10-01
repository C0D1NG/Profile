import React from "react";
import Projects from "../components/ProjectsPage/Projects";
import Hero from "../components/Hero";
import projectsBcg from "../images/projectsBcg.jpeg";

export default function ProjectsPage() {
  return (
    <>
      <Hero img={projectsBcg} />
      <Projects />
    </>
  );
}
