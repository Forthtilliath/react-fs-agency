import React from 'react';
import { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
init('user_8FIDoejXd1wysOmEeJUF0');

const ContactForm = () => {
    const [name, setName] = useState('forth');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('forth@dev.all');
    const [message, setMessage] = useState('Je dev et toi ?');

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameS = document.getElementById('name');
        let emailS = document.getElementById('email');
        let messageS = document.getElementById('message');
        let formMess = document.querySelector('.form-message');

        const isEmail = () => {
            let isMail = document.getElementById('not-mail');
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (email.match(regex)) {
                isMail.style.display = 'none';
                return true;
            } else {
                isMail.style.display = 'block';
                isMail.style.animation = 'dongle 1s';
                setTimeout(() => {
                    isMail.style.animation = 'none';
                }, 1000);
                return false;
            }
        };

        if (name && isEmail() && message) {
            const templateId = 'template_7giyn64';
            const serviceId = 'service_t1jijnw';

            nameS.classList.remove('red');
            emailS.classList.remove('red');
            messageS.classList.remove('red');

            sendFeedback(serviceId, templateId, {
                name,
                company,
                phone,
                email,
                message,
            });
        } else {
            formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
            formMess.style.background = 'rgb(253, 87, 87)';
            formMess.style.opacity = '1';

            if (!name) {
                nameS.classList.add('error');
            }
            if (!email) {
                emailS.classList.add('error');
            }
            if (!message) {
                messageS.classList.add('error');
            }
        }
    };

    const sendFeedback = (serviceId, templateId, variables) => {
        let formMess = document.querySelector('.form-message');

        emailjs
            .send(serviceId, templateId, variables)
            .then((res) => {
                console.log('send');
                formMess.textContent = 'Message envoyé ! Nous vous recontacterons dès que possible.';
                formMess.style.background = '#00c1ec';
                formMess.style.opacity = '1';

                document.getElementById('name').classList.remove('error');
                document.getElementById('email').classList.remove('error');
                document.getElementById('message').classList.remove('error');
                setName('');
                setCompany('');
                setPhone('');
                setEmail('');
                setMessage('');

                setTimeout(() => {
                    formMess.style.opacity = '0';
                }, 5000);
            })
            .catch((err) => (formMess.textContent = "Une erreur s'est produite, veuillez réessayer."));
    };

    return (
        <form className="contact-form">
            <h2>Contactez-nous</h2>
            <div className="form-content">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nom *"
                    value={name}
                />
                <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="société"
                    value={company}
                />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="téléphone"
                    value={phone}
                />
                <div className="email-content">
                    <label id="not-mail">Email non valide</label>
                    <input
                        type="mail"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email *"
                        value={email}
                    />
                </div>
                <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message *"
                    value={message}
                    required
                />
            </div>
            <input className="button hover" type="submit" value="envoyer" onClick={handleSubmit} />
            <div className="form-message"></div>
        </form>
    );
};

export default ContactForm;
