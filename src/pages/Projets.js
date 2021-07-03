import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Projet from '../components/Projet';
import Mouse from '../components/Mouse';

const Bottoms = [
    <ButtonsBottom left={'/'} right={'/projet-2'} />,
    <ButtonsBottom left={'/projet-1'} right={'/projet-3'} />,
    <ButtonsBottom left={'/projet-2'} right={'/projet-4'} />,
    <ButtonsBottom left={'/projet-3'} right={'/contact'} />,
];

export const Projets = ({ id }) => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projet projectNumber={id} />
                {Bottoms[id]}
            </div>
        </main>
    );
};

export default Projets;
