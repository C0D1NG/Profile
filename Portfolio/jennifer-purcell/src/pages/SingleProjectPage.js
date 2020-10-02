import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import cassini_orbits from "../images/cassini_orbits.gif";
import { ProjectConsumer } from "../context";
export default function SingleProjectPage() {
  return (
    <>
      <Hero img={cassini_orbits} title="single project" />
      <ProjectConsumer>
        {value => {
          const { singleProject, loading } = value;

          if (loading) {
            console.log("hello from loading");
            return <h1>project loading....</h1>;
          }
          const {
            description,
            title,
            image
          } = singleProject;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      alt="single project"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">project title: {title} </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about this project :
                    </p>
                    <p>{description}</p>
                    <Link
                      to="/projects"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to projects
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProjectConsumer>
    </>
  );
}
