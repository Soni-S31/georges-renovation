import React from 'react'
import Climbanner from '../../assets/clim/bannerClimatisation.avif'
import CarouselReno from '../../components/Carousel_reno'
/* Img clim carousel */
import Clim1 from '../../assets/clim/clim01.avif'
import Clim5 from '../../assets/clim/clim02.avif'
import Clim2 from '../../assets/clim/clim03.avif'
import Clim3 from '../../assets/clim/clim04.avif'
import Clim4 from '../../assets/clim/clim05.avif'
import Clim6 from '../../assets/clim/clim06.avif'
import Clim7 from '../../assets/clim/clim07.avif'

export default function Climatisation() {

  return (
    <main className="main">
        <article className="banner">
      <title className="banner_info">
        <div className="border_banner">
          <h1 className="banner_title">CLIMATISATION</h1>
        </div>
      </title>
        <img
          className="banner_img"
          src={Climbanner}
          alt="climatisation Samsung"
        />
      </article>
      <section className='intro'>
      <title className="title_center">
      Installateur agréé de climatisation
        </title>
        
        <article className='renovation_cat'>
        <div className='content_intro'>
       Georges Rénovation est agréé pour l'installation de systèmes de climatisation des particuliers et des professionnels.
        </div>
          <div className='content_intro'>Nos installateurs sont des professionnels qualifiés et expérimentés dans leur domaine, et ils se tiennent au courant des dernières technologies et des normes de sécurité en vigueur. Ils sont disponibles pour vous fournir des conseils personnalisés sur le choix du système de climatisation adapté à vos besoins et à votre budget.</div>
          <div className='content_intro'>Nous travaillons avec les meilleures marques du marché pour vous fournir des produits de haute qualité qui répondent à vos besoins et à votre budget.</div>
          <div className='content_intro'>En plus de l'installation, nous effectuons également la maintenance et la réparation pour vous assurer que votre système de climatisation reste en bon état de fonctionnement tout au long de son cycle de vie.</div>
          <div className='reno_carousel_display'>
            <CarouselReno>
              <img
              className="carousel_reno_img"
              src={Clim5}
              alt="Clim réversible samsung windfree dans une chambre et deux groupex extérieurs Samsung"
              />
              <img
              className="carousel_reno_img"
              src={Clim2}
              alt="installation d'un split Samsung windfree confort dans une salle de formation et groupe extérieur de climatisation Samsung"
              />
              <img
              className="carousel_reno_img"
              src={Clim3}
              alt="split climatisation  et groupe extérieur Toshiba"
              />
              <img
              className="carousel_reno_img"
              src={Clim4}
              alt="climatisation Samsung"
              />
              <img
              className="carousel_reno_img"
              src={Clim1}
              alt="climatisation Samsung d'une salle de formation "
              />
              <img
              className="carousel_reno_img"
              src={Clim6}
              alt="climatisation Samsung d'une maison"
              />
              <img
              className="carousel_reno_img"
              src={Clim7}
              alt="groupe extérieur Daikin et climatisation  d'une maison"
              />
            </CarouselReno>
          </div>
          <div className='content_intro'>Soucieux de l'environnement, nous utilisons des produits respectueux et économes en énergie pour réduire les émissions de gaz à effet de serre et les coûts d'exploitation de votre système de climatisation.</div>
           <div  className='content_intro'>Nous sommes impatients de travailler avec vous pour trouver la solution de climatisation qui répond à vos besoins spécifiques et vous garantir un confort optimal. N'hésitez pas à nous contacter pour plus d'informations ou pour planifier une consultation.</div>
        </article>
        </section>
    </main>
  )
  
}