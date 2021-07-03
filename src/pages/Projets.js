import React from 'react';
import Navigation from '../Components/Navigation';
import ButtonsBottom from '../Components/ButtonsBottom';
import Logo from '../Components/Logo';
import Projet from '../Components/Projet';
import Mouse from '../Components/Mouse';

const Bottoms = [
    <ButtonsBottom left={'/'} right={'/projet-2'} />,
    <ButtonsBottom left={'/projet-1'} right={'/projet-3'} />,
    <ButtonsBottom left={'/projet-2'} right={'/projet-4'} />,
    <ButtonsBottom left={'/projet-3'} right={'/projet-1'} />, // TODO: Remove later
    // <ButtonsBottom left={'/projet-3'} right={'/contact'} />,
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
