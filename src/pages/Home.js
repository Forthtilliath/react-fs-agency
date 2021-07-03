import React from 'react';
import ButtonsBottom from '../Components/ButtonsBottom';
import DynamicText from '../Components/DynamicText';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';

const Home = () => {
    return (
        <main>
            <Mouse />
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Forth AGENCY</h1>
                        <h2>
                            <span className="dynamic-text">
                                <span className="simply">simply</span>
                                <DynamicText messages={['simple', 'clear', 'smart', 'strong']} delaiLetters={80} />
                            </span>
                        </h2>
                    </div>
                </div>
                <ButtonsBottom right={'/projet-1'} />
            </div>
        </main>
    );
};

export default Home;
