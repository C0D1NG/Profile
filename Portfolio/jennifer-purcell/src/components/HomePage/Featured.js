import React from "react";
import Project from "../Project";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProjectConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured projects" center="true" />
        {/* projects */}
        <div className="row my-5">
          <ProjectConsumer>
            {value => {
              const { featuredProjects } = value;

              return featuredProjects.map(project => (
                <Project key={project.id} project={project} />
              ));
            }}
          </ProjectConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/projects" className="main-link">
              my projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
