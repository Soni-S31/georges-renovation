import React from 'react'
import './Home.css'
import Carousel from '../../components/Carousel/carousel'
import Sdb from '../../assets/salle-de-bain.avif'
//import Plombier from '../../assets/plombier.avif'
//import Clim from '../../assets/climatisation.avif'
import carousel1 from '../../assets/sdbcarousel0.avif'
import Carousel2 from '../../assets/sdbcarousel1.avif' 
import Carousel3 from '../../assets/sdbcarousel2.avif'
import Carousel5 from '../../assets/saloncarousel1.avif'
import Insta from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'




export default function Home() {

  return (
      <main className="main">
      <Carousel>
          <div className="carousel-image">
          <img
          className="carousel_img"
            src={carousel1}
            alt="salle d'eau blanche robinetterie noire"
          />
          <div className="text-animation ">Rénovation intérieure<br />
          sur Toulouse et ses environs</div>
        </div>
        <div className="carousel-image">
          <img
            className="carousel_img"
            src={Carousel2}
            alt="salle d'eau noir et blanc, sol imitation parquet "
          />
          <div className="text-animation">Votre projet clé en main</div>
        </div>
        <div className="carousel-image">
        <img
            className="carousel_img"
          src={Carousel3}
            alt="salle d'eau noir et blanc, sol imitation parquet "
          />
          <div className="text-animation">Réalisons ensemble l'intérieur qui vous ressemble</div>
        </div>
        <div className="carousel-image">
        <img
            className="carousel_img"
          src={Carousel5}
            alt="salle d'eau noir et blanc, sol imitation parquet "
          />
          <div className="text-animation">Transformez votre maison en un lieu de vie confortable</div>
        </div>
        
        </Carousel>
  
        <section className="intro">
        <div className="content_intro">
          Bienvenue sur notre site ! <br />
          <br/>Artisans spécialistes du second oeuvre, nous sommes fiers de vous présenter notre entreprise spécialisée dans la réalisation de travaux de finition et de rénovation intérieure.
            Nous sommes passionnés par notre métier et nous mettons tout notre savoir-faire et notre expérience à votre disposition pour vous accompagner dans vos projets de rénovation. 
            <br/>Nous intervenons sur Toulouse et ses environs.
          </div>
          <div className="container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    src={Sdb}
                    alt="Logo salle de bain dessiné  noir et blanc"
                  />
                  <h3>Rénovation</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Rénovation de salle bain, cuisine ou tout autre pièce de votre
                    maison. Nous concevons vos projets de A à Z.
                  </p>
                  <a href="/Renovation">Réalisations</a>
                </div>
              </div>
            </div>
           
        </div>
        <div className="content_intro">
        Nous attachons une grande importance à la qualité de notre travail et à la satisfaction de nos clients. C'est pourquoi nous utilisons des matériaux de qualité et des techniques modernes pour garantir un résultat final impeccable. Nous sommes également à votre écoute pour comprendre vos besoins et vos attentes afin de vous proposer des solutions sur mesure qui répondent parfaitement à vos exigences.
          </div>
  
          <article className="content_intro">
            <p >
            N'hésitez pas à nous contacter pour en savoir plus sur nos services et pour prendre rendez-vous pour une visite. {' '}
            </p>
            <div className="info_red">
              <button > <a href="/Contact">Contact</a></button>
          </div>
            <div className='info_insta'>
            <p >
              Vous pouvez également suivre nos aventures sur Instagram et facebook :
            </p>
            <div className='home_reso'>
            <a
              href="https://www.instagram.com/georges_renovation/"
              alt="lien instagram"
            >
              <img
                src={Insta}
                alt="lien instagram Georges Rénovation"
                href="https://www.instagram.com/georges_renovation/"
              />
            </a>
            <a
              href="https://www.facebook.com/georgesrenovation/"
              alt="lien facebook"
            >

            <img
              src={facebook}
                alt="lien facebook Georges Rénovation"
                href="https://www.facebook.com/georgesrenovation/"
            />
              </a>
              </div>
          </div>
          </article>
        </section>
      </main>
    )
  }
