import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
    const variants = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        },
    };
    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    };

    return (
        <main>
            <Mouse />
            <motion.div
                className="contact"
                initial="out"
                animate="in"
                exit="out"
                variants={variants}
                transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>42 rue des Tulipes</p>
                            <p>33000 Bordeaux</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0606060606" className="hover">
                                <p className="clipboard" onClick={() => alert('Téléphone copié !')}>
                                    06 06 06 06 06
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="forthagency@gmail.com" className="hover">
                                <p className="clipboard" onClick={() => alert('Email copié !')}>
                                    forthagency@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Forth Agency - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={'/project-4'} />
            </motion.div>
        </main>
    );
};

export default Contact;
