import React from 'react';
import DynamicText from '../Components/DynamicText';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <SocialNetwork />
            <div className="home-main">
                <div className="main-content">
                    <h1>FS AGENCY</h1>
                    <h2>
                        <DynamicText />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
