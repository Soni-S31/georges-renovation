import React from 'react';
import './Contact.css';
import { useState } from 'react'
import ContactBanner from '../../assets/bannerContactmin.avif'

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Message envoyé avec succès !"))
      .catch((error) => alert(error));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    let valid = true;

    if (name.trim().length < 2) {
      alert("Veuillez saisir votre nom complet.");
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Veuillez saisir une adresse e-mail valide.");
      valid = false;
    }

    if (message.trim().length < 10) {
      alert("Veuillez saisir un message d'au moins 10 caractères.");
      valid = false;
    }

    return valid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit(event);
    }
  };

  return (
    <main className='main' >
      <article className="banner">
      <title className="banner_info">
        <div className="border_banner">
          <h1 className="banner_title">Contact</h1>
        </div>
      </title>
        <img
          className="banner_img"
          src={ContactBanner}
          alt="différentes photos : salle de bain, climatisation, outillage extérieure"
        />
      </article>
          
    <div className="intro">
      <div className='content_intro'>
        Vous souhaitez moderniser votre cuisine, rénover votre salle de bain, ou réaménager votre espace de travail.<br/>
        Vous avez des travaux de plomberie ou vous souhaitez plus de confort en installant la climatisation.<br />
        Contactez-nous dès maintenant en nous décrivant votre projet et nous vous recontacterons. 
      </div>
      <form
        name="contact"
        method="POST"
        className="contact_form"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className='contact_label' htmlFor="name">Nom et prénom :
        <input type="text" name="name" value={name} onChange={handleNameChange} required />
        </label>
        <label className='contact_label' htmlFor="email">Email :
        <input type="email" name="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label className='contact_label' htmlFor="message">Message :
        <textarea name="message" value={message} onChange={handleMessageChange} required></textarea>
        </label>
        <button  type="submit">Envoyer</button>
      </form>
      </div>
      </main>
  );
}


export default ContactForm;
