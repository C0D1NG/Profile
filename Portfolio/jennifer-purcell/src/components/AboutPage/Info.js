import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
import { Link } from "react-router-dom";

export default function Info() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                className="img-fluid img-thumbnail"
                alt="about me"
                style={{
                  background: "var(--darkGrey)",
                  height: "600px",
                  width: "600px",
                  borderRadius: "25px",
                  borderStyle: "outset"
                }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about me" />
              <p className="text-lead text-muted my-3">
                * UMSL Alumni, with Bachelor's of Science in Information
                Systems. <br />
                * Hungry for continuing education on new-to-me coding languages
                describes me best. <br />
                * In my spare time, I enjoy crafting, vacationing to the
                Caribbean, and occasionally extreme sports. <br />* I strive to
                be the very best of what I can be.
              </p>
              <Link to="/languages" className="main-link">
                more info
              </Link>
              {/* <button
                className="main-link"
                type="button"
                style={{ marginTop: "2rem" }}
              >
                more info
              </button> */}
            </div>
          </div>
        </div>
      </section>
    );
}
