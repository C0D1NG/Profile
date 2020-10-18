import React from 'react';
import { faReact, faBootstrap, faHtml5, faCss3, faJs, faJava, faPython } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faLaptop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './myskills.scss'

const MySkills = () => {
    return (
        <div className="my-skills col-lg-8 col-md-7">
            <h2 className="text-center">My Skills</h2>
            <ul className="skills row">
                <li className="row col-sm-12 col-lg-6 list-unstyled">
                    <div className="icon col-3 text-center"><FontAwesomeIcon icon={faLaptopCode} size="4x" /></div>
                    <div className="col-9">
                        <h4>Web Development</h4>
                        <ul className="skill row">
                            <li className="list-unstyled"><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon={faCss3} /> CSS3</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                        </ul>
                    </div>
                </li>
                <li className="row col-sm-12 col-lg-6 list-unstyled">
                    <div className="icon col-3 text-center"><FontAwesomeIcon icon={faLaptopCode} size="4x" /></div>
                    <div className="col-9">
                        <h4>Frontend Frameworks</h4>
                        <ul className="skill row">
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                            </li>
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faReact} /> React Js
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="row col-sm-12 col-lg-6 list-unstyled">
                    <div className="icon col-3 text-center"><FontAwesomeIcon icon={faLaptop} size="4x" /></div>
                    <div className="col-9">
                        <h4>Backend Frameworks</h4>
                        <ul className="skill row">
                            <li className="list-unstyled" style={{ fontFamily: "Roboto, sans-serif" }}>
                                django
                            </li>
                            <li className="list-unstyled" style={{ fontFamily: "open-sans, sans-serif" }}>
                                Express
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="row col-sm-12 col-lg-6 list-unstyled">
                    <div className="icon col-3 text-center"><FontAwesomeIcon icon={faLaptop} size="4x" /></div>
                    <div className="col-9">
                        <h4>Backend Development</h4>
                        <ul className="skill row">
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faJava} /> Java
                            </li>
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faPython} /> Python
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="row col-sm-12 col-lg-6 list-unstyled">
                    <div className="icon col-3 text-center"><FontAwesomeIcon icon={faLaptopCode} size="4x" /></div>
                    <div className="col-9">
                        <h4>Web Services</h4>
                        <ul className="skill row">
                            <li className="list-unstyled">
                                REST
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MySkills