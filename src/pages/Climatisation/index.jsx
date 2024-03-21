import { Link } from 'react-router-dom'
import React from 'react'
import './Climatisation.css';
import Climbanner from '../../assets/clim/bannerClimatisation.avif'
import CarouselReno from '../../components/Carousel_reno'
import RGE from '../../assets/clim/logo-QualiPAC-2024-RGE-01.png'
import Climsamsung from '../../assets/clim/samsung wind free.png'
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
      Restez cool toute l'année avec notre expertise en climatisation !
        </title>
        
        <article className='renovation_cat'>
        <div className='content_intro'>
       Georges Rénovation est certifié RGE Qualipac pour l'installation et la maintenance de systèmes de climatisation des particuliers et des professionnels.
          </div>
          <Link className="logo_RGE" to="https://www.qualit-enr.org/entreprises/georges-renovation/">
        <img
          src={RGE}
          alt="logo RGE Qualipac"
        />
        </Link>
          <div className='content_intro'>Nous sommes disponibles pour vous fournir des conseils personnalisés sur le choix du système de climatisation adapté à vos besoins et à votre budget. Nous travaillons avec les meilleures marques du marché pour vous fournir des produits de haute qualité.</div>
          <div className='content_clim'>
            <img
              className="clim_samsung_img"
              src={Climsamsung}
              alt="Clim réversible samsung windfree"
              />
            <div className='clim_samsung_tittle'>SAMSUNG Wind Free</div>
            <div className='clim_samsung'>Le confort sans courant d'air</div>
            <div className='clim_samsung_price'>La game Comfort à partir de 1600€ TTC pour 25m² environ </div>
          
          </div>
          
          <div className='content_intro'>En plus de l'installation, nous effectuons la maintenance et la réparation pour vous assurer que votre système de climatisation reste en bon état de fonctionnement tout au long de son cycle de vie.</div>
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
          <div className='content_intro'>Qualifiés et expérimentés dans le domaine, nous nous tenons au courant des dernières technologies et des normes de sécurité en vigueur. </div>
          <div className='content_intro'>Soucieux de l'environnement, nous utilisons des produits respectueux et économes en énergie pour réduire les émissions de gaz à effet de serre et les coûts d'exploitation de votre système de climatisation.</div>
           
        </article>
        </section>
    </main>
  )
  
}
