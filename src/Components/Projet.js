import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Projet = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[projectNumber];

    const styleRandomCircle = {
        left: Math.floor(Math.random() * 20 + 60) + 'vw',
        top: Math.floor(Math.random() * 20 + 40) + 'vh',
        transform: `scale(${Math.random() + 0.7})`,
    };

    return (
        <div className="project-main">
            <div className="project-content">
                {/* La key permet de reset l'animation */}
                <h1 key={project.id}>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                    {project.languages.map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                    </span>
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="button-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
                        <span className="button">Voir le site</span>
                    </a>
                </div>
            </div>
            <span className="random-circle" style={styleRandomCircle}></span>
        </div>
    );
};

export default Projet;
