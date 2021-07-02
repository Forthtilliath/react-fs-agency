import React, { useCallback, useEffect, useMemo, useRef } from 'react';

const DynamicText = () => {
    const array = useMemo(() => ['simple', 'clear', 'smart', 'strong'], []);
    // const array = ['simple', 'clear', 'smart', 'strong'];

    let wordIndex = 0;
    let letterIndex = 0;

    let target = useRef();

    const createLetter = useCallback(() => {
        // console.log(wordIndex, letterIndex, array[wordIndex], array[wordIndex][letterIndex]);
        const letter = document.createElement('span');
        target.current.appendChild(letter);

        letter.classList.add('letter');
        letter.textContent = array[wordIndex][letterIndex];

        setTimeout(() => {
            letter.remove();
        }, 2000);
    }, [array, letterIndex, wordIndex]);

    const loop = useCallback(() => {
        setTimeout(() => {
            if (wordIndex >= array.length) {
                wordIndex = 0;
                letterIndex = 0;
                loop();
            } else if (letterIndex < array[wordIndex].length) {
                createLetter();
                letterIndex++;
                loop();
            } else {
                wordIndex++;
                letterIndex = 0;
                setTimeout(() => {
                    loop();
                }, 2000);
            }
        }, 80);
    }, []);

    useEffect(() => {
        loop();
    }, [loop]);

    return (
        <span className="dynamic-text">
            <span className="simply">simply</span>
            <span className="text-target" ref={target}></span>
        </span>
    );
};

export default DynamicText;
