import React from 'react';
import './Contact.css';

import ContactBanner from '../../assets/bannerContactmin.avif'

function ContactForm() {
  
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
        Contactez-nous dès maintenant en nous décrivant votre projet et nous vous recontacterons : <a href="mailto:georges.renovation31@gmail.com"> ici</a> 
        </div>
        <div className='content_intro'>
          <h2>Coordonnées</h2>
          <p>Adresse : Georges Rénovation </p><p>24 rue Bernadette - 31100 Toulouse</p>
      <p>Téléphone : <a href="tel:+0695975085">06 95 97 50 85 </a></p>
      <p>Email : <a href="mailto:georges.renovation31@gmail.com">georges.renovation31@gmail.com</a></p>
        </div>
     
      </div>
      </main>
  );
}


export default ContactForm;