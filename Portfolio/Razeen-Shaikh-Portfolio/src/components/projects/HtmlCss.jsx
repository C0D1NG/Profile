import React from 'react';
import { htmlcss } from './projects';

import './projects.scss'

const HtmlCss = () => {

    return (
        <div className="project-items col-lg-8 col-md-7 align-self-end">
            <h1 className="projects-title text-center text-light mt-2">HTML/CSS Projects</h1>
            { htmlcss.map(project => (
                <div key={project.name}
                    className="project-item d-flex">
                    <a
                        href={project.url}
                        className="text-decoration-none text-light row justify-content-center align-items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={project.image}
                            alt={project.name + " Project"}
                            className="col-lg"
                        />
                        <h3 className="col-lg col-sm-12 text-center">{project.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default HtmlCss