import React from "react";
import Title from "../Title";
import java from "../../images/java.png";
import react from "../../images/react.png"
import javascript from "../../images/javascript.png"
import mysql from "../../images/mysql.jfif"
import sql from "../../images/sql.jfif"
// import csharp from "../../images/csharp.jfif"
// import php from "../../images/php.png"
import html5 from "../../images/html5.png"
import css3 from "../../images/css3.jfif"

export default function LanguagesInfo() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="languages that i speak" />
            <p className="text-lead tex=t-muted my-3">
            <img src={java} alt="java" />
            <img src={react} alt="react" />
            <img src={javascript} alt="javascript" />
            <img src={mysql} alt="mysql" />
            <img src={sql} alt="sql" />
            {/* <img src={csharp} alt="c#" />
            <img src={php} alt="php" /> */}
            <img src={html5} alt="html5" />
            <img src={css3} alt="css3" />

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
