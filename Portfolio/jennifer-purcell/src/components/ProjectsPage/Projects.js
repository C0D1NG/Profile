import React from "react";
import { ProjectConsumer } from "../../context";
import Title from "../Title";
import Project from "../Project";

export default function Projects() {
  return (
      <ProjectConsumer>
      {value => {
        const { filteredProjects } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title center title="my projects" />
              {/* projects */}
              <div className="row py-5">
                {filteredProjects.map(project => {
                  return <Project key={project.id} project={project} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProjectConsumer>
  );
}
