import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sidebar } from './sidebar';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './sidebar.scss'

const Sidebar = props => {
    const [display, setDisplay] = useState({ htmlcss: false, javascript: false, react: false })
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', setClicked(false));
    }, []);

    return (
        <div className="col-lg-4 col-md-5 justify-self-start align-self-start navbar" style={{ backgroundColor: props.color }}>
            <div className="hamburger" onClick={() => setClicked(!clicked)}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} style={{ color: "#3e889e", cursor: "pointer" }} size="3x" />
            </div>
            <ul className={clicked ? "nav-links active" : "nav-links"}>
                {sidebar.map((nav, index) => (
                    (nav.name === "Portfolio"
                        || nav.name === "Featured Projects"
                        || nav.name === "Contact"
                        || nav.name === "My Skills")
                        ? (<li key={index}
                            className="nav-link list-unstyled">
                            <Link to={nav.href}
                                className="text-decoration-none text-light"
                                onClick={() => setClicked(!clicked)}
                            >{nav.name}</Link>
                        </li>)
                        : (nav.name === "HTML/CSS Projects"
                            || nav.name === "JavaScript Projects"
                            || nav.name === "React Projects")
                            ? (<li key={index}
                                className="projects list-unstyled"
                                onClick={() => {
                                    setClicked(!clicked)
                                    if (nav.name === "HTML/CSS Projects")
                                        setDisplay({
                                            ...display,
                                            htmlcss: !display.htmlcss,
                                        })
                                    else if (nav.name === "JavaScript Projects")
                                        setDisplay({
                                            ...display,
                                            javascript: !display.javascript,
                                        })
                                    else if (nav.name === "React Projects")
                                        setDisplay({
                                            ...display,
                                            react: !display.react,
                                        })
                                }}
                            >
                                <Link to={nav.href}
                                    className="text-decoration-none text-light"
                                    onClick={() => setClicked(!clicked)}
                                >{nav.name}</Link>
                            </li>)
                            : (nav.skill === "htmlcss")
                                ? ((display.htmlcss) &&
                                    (<li key={index} className="project list-unstyled">
                                        <a href={nav.href}
                                            className="text-decoration-none text-light"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >{nav.name}</a>
                                    </li>))
                                : (nav.skill === "javascript")
                                    ? ((display.javascript) &&
                                        (<li key={index} className="project list-unstyled">
                                            <a href={nav.href}
                                                className="text-decoration-none text-light"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{nav.name}</a>
                                        </li>))
                                    : (nav.skill === "react") &&
                                    ((display.react) &&
                                        (<li key={index} className="project list-unstyled">
                                            <a href={nav.href}
                                                className="text-decoration-none text-light"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{nav.name}</a>
                                        </li>))
                ))}
            </ul>
        </div>
    )
}

export default Sidebar