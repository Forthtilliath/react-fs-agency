import React, { useRef } from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        },
    };
    const constraintsRef = useRef(null);

    return (
        <main>
            <Mouse />
            <motion.div
                className="home"
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                ref={constraintsRef}
            >
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag onDragEnd dragConstraints={constraintsRef}>
                            Forth AGENCY
                        </motion.h1>
                        <motion.h2 drag onDragEnd dragConstraints={constraintsRef}>
                            <span className="dynamic-text">
                                <span className="simply">simply</span>
                                <DynamicText messages={['simple', 'clear', 'smart', 'strong']} delaiLetters={80} />
                            </span>
                        </motion.h2>
                    </div>
                </div>
                <ButtonsBottom right={'/projet-1'} />
            </motion.div>
        </main>
    );
};

export default Home;
