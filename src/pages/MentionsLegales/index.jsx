import React from 'react';
import '../About/about.css'
import './mentionsLegales.css'
import '../../utils/style/globalStyle.css'
import ContactBanner from '../../assets/bannerContactmin.avif'

const MentionsLegales = () => {
  return (
      <main className="main">
          <article className="banner">
      <title className="banner_info">
        <div className="border_banner">
      <h1 className="banner_title">Mentions légales</h1>
      </div>
      </title>
        <img
          className="banner_img"
          src={ContactBanner}
          alt="différentes photos : salle de bain, climatisation, outillage extérieure"
        />
      </article>

         <section className="intro">
        <article className="content_intro">
                  <h2>Coordonnées</h2>
      <p>Nom de l'entreprise : Georges Rénovation</p>
      <p>Forme juridique : EURL au capital social de 1000€</p>
      <p>Adresse : 24 rue Bernadette - 31100 Toulouse</p>
      <p>Téléphone : 06 95 97 50 87</p>
      <p>Email : georges.renovation31@gmail.com</p>
      <p>Numéro SIRET : 89857269800014</p>
      <p>Numéro TVA Intracommunautaire : FR30898572698</p>
</article>
        <article className="content_intro">
                  
      <h2>Publication</h2>
          <p>Responsable de la publication : Soni Développement à Toulouse</p>
          <p>Email : sonideveloppement@gmail.com</p>
      <p>Nom de l'hébergeur : Netlify</p>
      </article>
        <article className="content_intro">
      <h2>Protection des données personnelles</h2>
      <p>Nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations que vous nous fournissez lorsque vous utilisez notre site web et soumettez des informations via notre page de contact.</p>
    </article>
        <article className="content_intro">
    <h2>Collecte et utilisation des données personnelles</h2>
          <p>Lorsque vous utilisez notre page de contact, nous collectons votre nom et votre adresse e-mail pour pouvoir vous recontacter de manière apppropriée.</p>
          <p>Les données personnelles que vous nous fournissez via notre page de contact sont utilisées uniquement dans le but de vous recontacter et de répondre à vos demandes spécifiques.

</p></article>
        <article className="content_intro">
    <h2>Conservation et protection des données</h2>
          <p>Nous conservons vos données personnelles pendant une durée nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si la loi nous oblige à les conserver plus longtemps. Une fois que nous n'avons plus besoin de vos données, nous les supprimons de manière sécurisée.</p>
          <p>Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre les accès non autorisés, les pertes, les utilisations abusives ou les altérations.</p>
        <p>Nous ne partageons pas vos données personnelles avec des tiers, sauf si cela est nécessaire pour répondre à votre demande spécifique ou si nous y sommes légalement tenus.</p>
        <p>Vous avez le droit d'accéder à vos données personnelles que nous détenons et de demander leur rectification ou leur suppression. Vous pouvez également vous opposer au traitement de vos données personnelles dans certaines circonstances. Pour exercer vos droits ou si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à georges.renovation31@gmail.com.</p>
          </article>
        <article className="content_intro">
      <h2>Propriété intellectuelle</h2>
      <p>Tous les contenus présents sur ce site web, tels que les textes, les images, les logos et les vidéos, sont protégés par les lois sur la propriété intellectuelle. Ils sont la propriété exclusive de Georges Rénovation ou de leurs détenteurs respectifs.</p>
    <p>Toute utilisation non autorisée de ces contenus constitue une violation des droits de propriété intellectuelle. Vous n'êtes pas autorisé(e) à reproduire, distribuer, modifier ou exploiter de quelque manière que ce soit ces contenus sans notre autorisation écrite préalable.</p>
          <p>Nous nous réservons le droit d'entreprendre des actions légales pour protéger nos droits de propriété intellectuelle.</p>
          <p>Merci de respecter nos droits de propriété intellectuelle en naviguant sur ce site.</p>
      </article>
      </section>
              
              </main>
  );
};

export default MentionsLegales;
