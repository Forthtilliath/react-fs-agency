import React from 'react';

export default class DynamicText extends React.Component {
    constructor({ messages, delaiLetters = 80, delaiWords = 2000, target = '.text-target' }) {
        super();
        this.messages = typeof messages === 'string' ? [messages] : messages;
        this.nbMessages = this.messages.length;
        // Sélecteur de l'élément qui affiche les mots
        // Ici l'élément n'existe pas encore, d'où le Sélecteur pour le sélectionner
        // le moment venu.
        this.target = target;
        // Delai entre chaque lettre
        this.delaiLetters = delaiLetters;
        // Delai entre chaque mots
        this.delaiWords = delaiWords;

        // Démarre l'animation
        this.showMessageFromArray();
    }

    /**
     * Affiche un message lettre par lettre
     * @param {String} message
     * @param {Number} timeout Delai in ms
     * @returns {Promise}
     */
    typingPromises = (message) =>
        [...message].map(
            (ch, i) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(message.substring(0, i + 1));
                    }, this.delaiLetters * i);
                }),
        );

    /**
     * Affiche un message
     * @param {String} message
     */
    showMessageFromString(message) {
        this.typingPromises(message).forEach((promise) => {
            promise.then((portion) => {
                document.querySelector(this.target).textContent = portion;
            });
        });
    }

    /**
     *
     * @param {String[]} array
     * @param {Number} i Indice du tableau des messages
     */
    showMessageFromArray(i = 0) {
        setTimeout(() => {
            this.showMessageFromString(this.messages[i]);
            this.showMessageFromArray(++i % this.nbMessages);
        }, this.delaiWords);
    }

    render() {
        return <span className="text-target"></span>;
    }
}
