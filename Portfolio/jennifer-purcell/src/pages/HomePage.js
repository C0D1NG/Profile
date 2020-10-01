import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero title="2016-2020" max="true">
        <Link to="/projects" className="main-link" style={{ margin: "2rem" }}>
          my projects
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
