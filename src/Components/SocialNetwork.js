import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialNetwork = () => {
    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');
        navLinks.forEach((link) => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 13;
                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            });
            link.addEventListener('mouseleave', (e) => {
                link.style.transform = '';
            });
        });
    };

    return (
        <div className="social-network">
            <ul className="content">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </li>
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <FontAwesomeIcon icon={faTwitter} />
                    </li>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <FontAwesomeIcon icon={faInstagram} />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;
