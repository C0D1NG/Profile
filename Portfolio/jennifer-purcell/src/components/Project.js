import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ProjectConsumer } from "../context/context";

export default function Project({ project }) {
  return (
    <ProjectConsumer>
      {value => {
        const { setSingleProject } = value;
        return (
          <ProjectWrapper className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={project.image}
                  className="card-img-top p-5"
                  alt="project"
                  style={{ height: "320px" }}
                />
                <div className="project-icons">
                  <Link
                    to={`/projects/${project.id}`}
                    onClick={() => setSingleProject(project.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{project.title}</p>
              </div>
            </div>
          </ProjectWrapper>
        );
      }}
    </ProjectConsumer>
  );
}
//box shadow css generator
const ProjectWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .project-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .project-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
