import React from 'react'
import './about.css'
import '../../utils/style/globalStyle.css'
import Profil from '../../assets/profil.avif'
import Profil2 from '../../assets/IMG-teeshirt-min.avif'
import ContactBanner from '../../assets/bannerContactmin.avif'

function About() {
  return (
    <main className="main">
      <article className="banner">
      <title className="banner_info">
        <div className="border_banner">
          <h1 className="banner_title">A propos</h1>
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
          
            Georges Rénovation en quelques mots :
            <br />
            <br/>
            Je suis Georges Vincent, créateur et gérant de l'entreprise. Georges
            Rénovation a été crée en mars 2021 et s'est fait connaître
            principalement par le bouche à oreille grâce à ses réalisations de
            rénovation haut de gamme. Nous intervenons également sur différentes
            interventions : installation et dépannage en plomberie, chauffage,
            installation/maintenance de climatisation et de chaudière.
         
          <div className="info_competences">
            <ul>
              <li>
                Artisans polyvalents, nous maîtrisons différents corps de métier
                pour vous aider à réaliser vos projets de A à Z.{' '}
              </li>
              <li>
                Le travail bien fait, des finitions de qualité et la fiabilité
                sont pour nous une priorité.{' '}
              </li>{' '}
              <li>
                A l'écoute, nous sommes là pour vous conseiller sur les
                possibilités techniques alliant l'esthétique pour que vos
                projets soient conformes à vos attentes.{' '}
              </li>{' '}
            </ul>
          </div>
          <div className="info_img">
            <img
              className="info_img_profil"
              src={Profil}
              alt="Georges Vincent créateur de Georges Rénovation"
            />
            <img
              className="info_img_profil"
              src={Profil2}
              alt="Georges Vincent posant de la faïence"
            />
          </div>
        </article>
        <article className="content_intro">
            <p >
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous fournir un devis pour vos travaux. N'hésitez pas à nous contacter pour en savoir plus sur nos services et pour prendre rendez-vous pour une visite sur place. {' '}
            </p>
            <div className="info_red">
              <button > <a href="/Contact">Contact</a></button>
          </div>
          </article>
      </section>
    </main>
  )
}

export default About
