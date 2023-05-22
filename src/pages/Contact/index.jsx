import React, { useState } from 'react';
import './Contact.css';
import ContactBanner from '../../assets/bannerContactmin.avif';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert('Message envoyé avec succès !');
        form.reset();
      })
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

  return (
    <main className='main'>
      <article className="banner">
        <div className="border_banner">
          <h1 className="banner_title">Contact</h1>
        </div>
        <img
          className="banner_img"
          src={ContactBanner}
          alt="différentes photos : salle de bain, climatisation, outillage extérieure"
        />
      </article>

      <div className="intro">
        <div className='content_intro'>
          Vous souhaitez moderniser votre cuisine, rénover votre salle de bain, ou réaménager votre espace de travail.<br />
          Vous avez des travaux de plomberie ou vous souhaitez plus de confort en installant la climatisation.<br />
          Contactez-nous dès maintenant en nous décrivant votre projet et nous vous recontacterons.
        </div>
        <form
          name="contact"
          method="POST"
          className="contact_form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <label className='contact_label' htmlFor="name">Nom et prénom :</label>
          <input type="text" name="name" value={name} onChange={handleNameChange} required />

          <label className='contact_label' htmlFor="email">Email :</label>
          <input type="email" name="email" value={email} onChange={handleEmailChange} required />

          <label className='contact_label' htmlFor="message">Message :</label>
          <textarea name="message" value={message} onChange={handleMessageChange} required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
