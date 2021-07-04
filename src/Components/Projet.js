import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const Projet = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[projectNumber];

    const styleRandomCircle = {
        left: Math.floor(Math.random() * 20 + 60) + 'vw',
        top: Math.floor(Math.random() * 20 + 40) + 'vh',
        transform: `scale(${Math.random() + 0.7})`,
    };
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
        },
    };
    let imgX = Math.random() * 700 - 210;
    let imgY = Math.random() * 240 - 144;
    const imgAnim = {
        initial: {
            opacity: 0,
            x: imgX,
            y: imgY
        },
        visible: {
            opacity: 1,
            x: 0,
            y:0
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
        },
    };
    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    };

    return (
        <motion.div
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={transition}
        >
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
            <motion.div
                className="img-content"
                initial="initial"
                animate="visible"
                variants={imgAnim}
            >
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
            </motion.div>
            <span className="random-circle" style={styleRandomCircle}></span>
        </motion.div>
    );
};

export default Projet;
