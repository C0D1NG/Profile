import React from 'react';
import { react } from './projects';
import './projects.scss'

const ReactJs = () => {

    return (
        <div className="project-items col-lg-8 col-md-7 align-self-end">
            <h1 className="projects-title text-center text-light mt-3">ReactJs Projects</h1>
            { react.map(project => (
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

export default ReactJs