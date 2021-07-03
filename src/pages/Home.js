import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

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
