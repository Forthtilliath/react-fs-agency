import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink exact className="hover" activeClassName="nav-active" to="/">
                    <li>Accueil</li>
                </NavLink>
                <li className="nav-portfolio">
                    <li>Portfolio</li>
                    <ul className="nav-projects">
                        <NavLink exact className="hover" activeClassName="nav-active" to="/projets-1">
                            <li>Projet 1</li>
                        </NavLink>
                        <NavLink exact className="hover" activeClassName="nav-active" to="/projets-2">
                            <li>Projet 2</li>
                        </NavLink>
                        <NavLink exact className="hover" activeClassName="nav-active" to="/projets-3">
                            <li>Projet 3</li>
                        </NavLink>
                        <NavLink exact className="hover" activeClassName="nav-active" to="/projets-4">
                            <li>Projet 4</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink exact className="hover" activeClassName="nav-active" to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
