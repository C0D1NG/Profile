import React from 'react';
import { faFreeCodeCamp, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from './ContactForm.jsx';

import './contact.scss'

const Contact = () => {
    return (
        <div className="bg-gradient col-lg-8 col-md-7 align-self-end">
            <div className="contact d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-dark">Contact</h3>
                <ContactForm />
                <ul className="links d-flex align-items-center">
                    <li className="list-unstyled">
                        <a className="text-decoration-none text-dark"
                            href="https://github.com/Razeen-Shaikh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub}
                                style={{
                                    color: "#333"
                                }}
                            /> GitHub
                        </a>
                    </li>
                    <li className="list-unstyled">
                        <a className="text-decoration-none text-dark"
                            href="https://www.linkedin.com/in/razeen-shaikh-7a207b140/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "system-ui, sans-serif" }}>
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{
                                    color: "white",
                                    backgroundColor: "#0e76a8",
                                    paddingTop: "2px"
                                }}
                                fixedWidth
                            /> LinkedIn
                        </a>
                    </li>
                    <li className="list-unstyled">
                        <a className="text-decoration-none text-dark"
                            href="https://www.freecodecamp.org/razeen_shaikh"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "'Lato', sans-serif" }}>
                            <FontAwesomeIcon
                                icon={faFreeCodeCamp}
                                style={{
                                    color: "#006400"
                                }}
                                fixedWidth
                            /> freeCodeCamp
                        </a>
                    </li>
                </ul>
            </div>
            <p className="copy-right text-dark">Copyright © 2020 Razeen. All rights reserved</p>
        </div>
    )
}

export default Contact;