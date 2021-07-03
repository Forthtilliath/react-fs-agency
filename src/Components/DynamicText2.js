import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function DynamicText() {
    // const [isLoaded, setisLoaded] = useState(initialState)

    const elemTarget = useRef(null);

    /**
     * Affiche un message lettre par lettre
     * @param {String} message
     * @param {Number} timeout Delai in ms
     * @returns {Promise}
     */
    const typingPromises = (message, timeout) =>
        [...message].map(
            (_ch, i) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(message.substring(0, i + 1));
                    }, timeout * i);
                }),
        );

    /**
     * Affiche un message
     * @param {String} message
     */
    const showMessageFromString = (message) => {
        typingPromises(message, 140).forEach((promise) => {
            promise.then((portion) => {
                elemTarget.current.textContent = portion;
            });
        });
    };

    /**
     *
     * @param {String[]} array
     * @param {*} i
     */
    const showMessageFromArray = (array, i = 0) => {
        // if (i < 4) {
            console.log(array, i);
            setTimeout(() => {
                showMessageFromString(array[i]);
                showMessageFromArray(array, ++i % array.length);
            }, 2000);
        // }
    };

    //useEffect(() => {
    const messages = ['simple', 'clear', 'smart', 'strong'];
    showMessageFromArray(messages);
    //}, []);

    return (
        <span ref={elemTarget}>
            <p id="target"></p>
        </span>
    );
}
