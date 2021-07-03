import React, { Component } from 'react';

export default class DynamicText extends Component {
    constructor({ messages, delaiLetters = 140, delaiWords = 2000 }) {
        super();
        this.messages = typeof messages === 'string' ? [messages] : messages;
        this.nbMessages = this.messages.length;
        // Delai entre chaque lettre
        this.delaiLetters = delaiLetters;
        // Delai entre chaque mots
        this.delaiWords = delaiWords;

        this.start();
    }

    start() {
        this.showMessageFromString(this.messages[0]);
        this.showMessageFromArray(1);
    }

    /**
     * Affiche un message lettre par lettre
     * @param {String} message
     * @param {Number} timeout Delai in ms
     * @returns {Promise}
     */
    typingPromises = (message) =>
        [...message].map(
            (_ch, i) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        // // Retour une chaine
                        // resolve(message.substring(0, i + 1));
                        // Retour une lettre
                        resolve(message.substring(i, i + 1));
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
                this.createElementLetter(portion);
            });
        });
    }

    /**
     * Crée une boucle infinie pour afficher les mots les un après les autres
     * @param {String[]} array Tableau des mots
     * @param {Number} i Indice du tableau des messages
     */
    showMessageFromArray(i = 0) {
        setTimeout(() => {
            this.showMessageFromString(this.messages[i]);
            this.showMessageFromArray(++i % this.nbMessages);
        }, this.delaiWords + 500);
    }

    /**
     * Génère un span temporaire pour afficher la lettre.
     * @param {String} letter
     */
    createElementLetter(letter) {
        // Pour sto
        if (document.querySelector('.text-target') === null) return;

        const spanLetter = document.createElement('span');
        document.querySelector('.text-target').appendChild(spanLetter);

        spanLetter.classList.add('letter');
        spanLetter.style.opacity = '0';
        spanLetter.style.animation = 'anim 5s ease forwards';
        spanLetter.textContent = letter;

        setTimeout(() => {
            spanLetter.remove();
        }, this.delaiWords);
    }

    render() {
        return <span className="text-target"></span>;
    }
}
