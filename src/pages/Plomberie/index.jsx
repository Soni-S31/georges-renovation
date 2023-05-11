import React from 'react'
import BannerPlomberie from "../../assets/plomberie/bannerPlomberie.avif"
import CarouselReno from '../../components/Carousel_reno'
/* Img plomberie carousel */
import Plomberie1 from "../../assets/plomberie/plomberie1.avif"
import Plomberie2 from "../../assets/plomberie/plomberie2.avif"
import Plomberie3 from "../../assets/plomberie/plomberie3.avif"
import Plomberie4 from "../../assets/plomberie/plomberie4.avif"
import Plomberie5 from "../../assets/plomberie/plomberie5.avif"
import Plomberie6 from "../../assets/plomberie/plomberie6.avif"
import Plomberie7 from "../../assets/plomberie/plomberie7.avif"


export default function Plomberie() {

  return (
    <main className="main">
        <article className="banner">
        <title className="banner_info">
        <div className="border_banner">
          <h1 className="banner_title">PLOMBERIE</h1>
        </div>
      </title>
        <img
          className="banner_img"
          src={BannerPlomberie}
          alt="outils et plan de plomberie"
          type="image/avif"
        />
      </article>
      <section className='intro'>
      <title className="title_center">
      Sanitaires, chauffage et energies renouvelables
        </title>
        
        <article className='renovation_cat'>
        <div className='content_intro'>
        Nous sommes une entreprise spécialisée dans l'installation, la maintenance et la réparation de sanitaires, de chauffage et d'énergies renouvelables pour les particuliers et les entreprises. Nous offrons un large éventail de services pour assurer que vos équipements fonctionnent correctement et que vous êtes en mesure de profiter d'un confort optimal.
        </div>
          <div className='content_intro'>Nous intervenenons sur tous les types d'installations sanitaires, de chauffage et d'énergies renouvelables. Nous pouvons effectuer des inspections approfondies, des diagnostics précis et des réparations efficaces, garantissant ainsi que votre installation fonctionne correctement.</div>
          <div className='content_intro'>Nous effectuons des travaux de maintenance préventive, tels que le remplacement des filtres, le contrôle des fuites et la vérification des performances des installations. Ces services préventifs peuvent prolonger la durée de vie de vos installations, réduire les coûts d'énergie et minimiser les risques de pannes et de défaillances.</div>
          <div className='reno_carousel_display'>
            <CarouselReno>
            <img
              className="carousel_reno_img"
              src={Plomberie1}
              alt="robinetterie argentée, chauffe-eau extra plat Atlantic, robbinetterie et accessoires salle de bain"
              />
              <img
              className="carousel_reno_img"
              src={Plomberie2}
              alt="serche serviette, baignoire, nourrice plomberie"
              />
            <img
              className="carousel_reno_img"
              src={Plomberie3}
              alt="nourrice plomberie et raccord et robinetterie noire"
              />
           <img
              className="carousel_reno_img"
              src={Plomberie4}
              alt="3 images: raccordement plomberie, chauffe-eau suspendue, raccordement serche-serviette"
              />
              <img
              className="carousel_reno_img"
              src={Plomberie5}
              alt="3 images : seche serviette, wc et son lave-main, baignoire"
              />
              <img
              className="carousel_reno_img"
              src={Plomberie6}
              alt="plombier travaillant sur des raccords"
              />
              <img
              className="carousel_reno_img"
              src={Plomberie7}
              alt="nourrice et robinetterie dorée à l'ancienne "
              />
              
            </CarouselReno>
          </div>
          <div className='content_intro'>En outre, notre entreprise propose également des services d'installation d'équipements sanitaires, de chauffage et d'énergies renouvelables. Nous sommes équipés pour installer des équipements de qualité supérieure, et nous sommes fiers d'utiliser des technologies de pointe pour garantir des résultats optimaux.</div>
          
          <div className='content_intro'>Nous sommes également à l'avant-garde des technologies d'énergies renouvelables. Nous offrons des services de maintenance et d'installation pour des équipements tels que les pompes à chaleur.</div>
           <div  className='content_intro'>En somme, nous sommes une entreprise engagée dans la fourniture de services de qualité pour les installations sanitaires, de chauffage et d'énergies renouvelables. Nous sommes prêts à vous aider à maintenir votre installation en parfait état de fonctionnement et à vous offrir des solutions durables pour un confort optimal. Contactez-nous dès aujourd'hui pour discuter de vos besoins de maintenance ou d'installation.</div>
        </article>
        
        
        </section>
        
    </main>
  )
  
}