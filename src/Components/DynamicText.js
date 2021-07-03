import React, { useEffect } from 'react';

const DynamicText = ({ messages, delaiLetters = 140, delaiWords = 2000 }) => {
    let array = messages;
    let wordIndex = 0;
    let letterIndex = 0;

    useEffect(() => {
        const target = document.getElementById('text-target');

        const createLetter = () => {
            const letter = document.createElement('span');
            target.appendChild(letter);

            letter.classList.add('letter');
            letter.style.opacity = '0';
            letter.style.animation = 'anim 5s ease forwards';
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, delaiWords);
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    /* eslint-disable */
                    wordIndex = 0;
                    letterIndex = 0;
                    /* eslint-enable */
                    loop();
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(() => {
                        loop();
                    }, delaiWords);
                }
            }, delaiLetters);
        };
        loop();
    }, []);

    return <span id="text-target"></span>;
};

export default DynamicText;
