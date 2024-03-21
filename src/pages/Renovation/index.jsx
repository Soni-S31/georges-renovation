import React from 'react'
import './renovation.css'
import Banner from '../../assets/bannerRenovation.avif'
import CarouselReno from '../../components/Carousel_reno'
/* Img Salle de bain */
import Sb1 from '../../assets/sdb/sdbbluezelige.avif'
import Sb2 from '../../assets/sdb/sdbmgrisnoir.avif'
import Sb3 from '../../assets/sdb/sdbbois.avif'
import Sb4 from '../../assets/sdb/sdbblueroi.avif'
import Sb5 from '../../assets/sdb/sdbnoirblanc.avif'
import Sb6 from '../../assets/sdb/sdbbeige1.avif'
import Sb8 from '../../assets/sdb/sdbbeige2.avif'
import Sb9 from '../../assets/sdb/douchebois.avif'
import Sb10 from '../../assets/sdb/sdbmiroir.avif'
import Sb11 from '../../assets/sdb/sdbsolvielli.avif'
import Sb12 from '../../assets/sdb/sdbcarreauciment.avif'
import Sb13 from '../../assets/sdb/nichecarreauciment.avif'
import Sb14 from '../../assets/sdb/doucheboisblanc.avif'
import Sb15 from '../../assets/sdb/baignoireniche.avif'
import Sb16 from '../../assets/sdb/sdbboisblanc.avif'
import Sb17 from '../../assets/sdb/sdbgris.avif'
import Sb18 from '../../assets/sdb/sdbblancvague.avif'
import Sb23 from '../../assets/sdb/sdbmarine.avif'
import Sb19 from '../../assets/sdb/sdbred.avif'
import Sb20 from '../../assets/sdb/sdb23plan.avif'
import Sb21 from '../../assets/sdb/sdbblanccarreauciment.avif'
import Sb22 from '../../assets/sdb/sdbjauneterrazo.avif'
import Sb24 from '../../assets/sdb/sdbbellevue1.avif'
import Sb25 from '../../assets/sdb/sdbbellevue2.avif'

/*Img other */
import Other1 from '../../assets/other/etagere.avif'
import OtherO from '../../assets/other/etagere2.avif'
import Other2 from '../../assets/other/extsol.avif'
import Other3 from '../../assets/other/couloir1.avif'
import Other6 from '../../assets/other/parquetcarreauciment.avif'
import Other7 from '../../assets/other/solmarbre.avif'
import Cuisine1 from '../../assets/cuisine/cuisinenoir.avif'
import Cuisine2 from '../../assets/cuisine/cuisinebleu.avif'
import Bellevue1 from '../../assets/other/bellevue1.avif'
import Bellevue2 from '../../assets/other/bellevue2.avif'
import Appart from '../../assets/other/appart.avif'

export default function Renovation() {

  return (
    <main className="main">
    <article className="banner">
      <title className="banner_info">
        <div className="border_banner">
          <h1 className="banner_title">Rénovation</h1>
        </div>
      </title>
        <img
          className="banner_img"
          src={Banner}
          alt="salle d'eau noir et blanc moderne"
        />
      </article>
      
      <section className='intro'>
        <div className='content_intro'>
        Nous sommes fiers de vous présenter quelques-unes de nos réalisations. En tant qu'artisans passionnés par notre métier, nous avons eu la chance de travailler sur de nombreux projets variés, du plus petit au plus grand. Nous avons toujours à cœur de répondre aux besoins spécifiques de nos clients en proposant des solutions sur-mesure et personnalisées. Nous sommes constamment à la recherche de nouvelles tendances et de nouveaux matériaux pour vous offrir des réalisations esthétiques et fonctionnelles, qui correspondent à vos goûts et à vos attentes.
        </div>
        <article className='renovation_cat'>
          
            <h3>Les salles de bain</h3>
            <div className='content_intro'>Spécialisés dans la conception et la création de salles de bains sur-mesure. Nous apportons notre savoir-faire et notre expertise à votre service pour vous offrir des espaces de détente et de bien-être uniques, adaptés à vos besoins et à vos envies. Nous vous aidons à sélectionner les matériaux les plus nobles et les plus durables pour garantir la qualité et la longévité de nos réalisations. Que vous recherchiez une salle de bain moderne, traditionnelle ou contemporaine, nous saurons répondre à toutes vos attentes.</div>
          <div className='reno_carousel_display'>
            <CarouselReno>
            <img
              className="carousel_reno_img"
              src={Sb1}
              alt="salle de bain vitre de douche industrielle, faience zelige bleu, meuble et vasque blanc miroir rond suspendu "
              />
            <img
              className="carousel_reno_img"
              src={Sb2}
              alt="salle d'eau sol carreau gris héxogonal, mur noir style ardoise, meuble double vasque design et deux miroir rond suspendus"
              />
              <img
              className="carousel_reno_img"
              src={Sb3}
              alt="salle d'eau imitation bois et marbre, douche en pointe de diamant,meuble bois et vasque rectangulaire miroir rétroéclairant"
              />
              <img
              className="carousel_reno_img"
              src={Sb4}
              alt="salle d'eau sol carreaux de ciment et mur peint bleu roi, douche blanche"
              />
<img
              className="carousel_reno_img"
              src={Sb5}
              alt="salle d'eau vitre de douche industrielle et faïence blanche, meuble moderne noir, douche pointe de diamant"
              />
            <img
              className="carousel_reno_img"
              src={Sb6}
              alt="salle d'eau marbre et beige ambiance bien être et cocooning"
              />
              <img
              className="carousel_reno_img"
              src={Sb8}
              alt="douche en pointe de diamant imitation bois faïence marbre blanc détail ouverture et niche de la douche"
              />
<img
              className="carousel_reno_img"
              src={Sb9}
              alt="douche à l'italienne avec grand bac à douche design, faiance imititation bois et grande porte vitrée"
              />
            <img
              className="carousel_reno_img"
              src={Sb10}
              alt="salle d'eau imitation marbre, double vasque blanche miroir éclairant "
              />
              <img
              className="carousel_reno_img"
              src={Sb11}
              alt="salle de bain avec douche et baignoire design,sol imitiation parquet vielli, robinetterie noire, meuble couleur vert d'eau"
              />
              <img
              className="carousel_reno_img"
              src={Sb12}
              alt="salle d'eau bois carreaux de ciment et meuble bois exotique"
              />
              <img
              className="carousel_reno_img"
              src={Sb13}
              alt="niche de douche en carreau de ciment"
              />
              <img
              className="carousel_reno_img"
              src={Sb14}
              alt="douche imitation bois avec caniveau carrelé et un mur faience blanche à relief "
              />
              <img
              className="carousel_reno_img"
              src={Sb24}
              alt="salle de bain blanche faience relief vague et meuble noir"
              />
              <img
              className="carousel_reno_img"
              src={Sb15}
              alt="baignoire moderne sol et faience imitation bois avec une niche intégrée"
              />
              <img
              className="carousel_reno_img"
              src={Sb16}
              alt="salle de bain douche et baignoire carreau imitation bois meuble doucle vasque en ceriser"
              />
              <img
              className="carousel_reno_img"
              src={Sb17}
              alt="salle d'eau avec meuble vasque bois et faïence grise et sol noir"
              />
              <img
              className="carousel_reno_img"
              src={Sb18}
              alt="salle d'eau avec meuble en bois et vasques ronde noire et faïence blance à relief vague"
              />
              <img
              className="carousel_reno_img"
              src={Sb25}
              alt="salle d'eau beige faience relief sol imitation parquet meuble double vasque blanc"
              />

              <img
              className="carousel_reno_img"
              src={Sb19}
              alt="salle d'eau rouge sol noir effet pierre,faience douche blanche à relief "
              />
              <img
              className="carousel_reno_img"
              src={Sb20}
              alt="meuble double vasque robinetterie moderne et porte savon intégré au mur "
              />
              <img
              className="carousel_reno_img"
              src={Sb21}
              alt="salle de douche sol carreau de ciment noir et gris, douche blanche et bleu carreau vague"
              />
              <img
              className="carousel_reno_img"
              src={Sb22}
              alt="salle de bain vintage faience terrazo ton jaune"
              />
              <img
              className="carousel_reno_img"
              src={Sb23}
              alt="salle d'eau ambiance marin faience bleu et blanc à relief vague"
              />

            </CarouselReno>
            </div>
            
        </article>
        <article className='renovation_cat'>

          <h3 >Le reste de la maison</h3>
          <div className='content_intro'>Nous pouvons transformer votre maison en un lieu de vie confortable et moderne. Nous sommes à votre disposition pour réaliser tous vos projets de rénovation, que ce soit pour la cuisine, le salon ou les chambres. Nous vous accompagnons tout au long du projet pour vous conseiller et vous guider dans vos choix. Nous sommes attachés à la qualité et à la satisfaction de nos clients, c'est pourquoi nous utilisons des matériaux de qualité et nous assurons que chaque détail est travaillé avec soin.</div>
          <div className='reno_carousel_display'>
            <CarouselReno>
            <img
              className="carousel_reno_img"
              src={Cuisine1}
              alt="cuisine noire ultra moderne"
              />
            <img
              className="carousel_reno_img"
              src={Other1}
              alt="étagere et armoire acier bois sur mesure"
              />
              <img
              className="carousel_reno_img"
              src={OtherO}
              alt="étagere et armoire acier bois sur mesure éclairées avec led"
              />
            <img
              className="carousel_reno_img"
              src={Other2}
              alt="sol d'une grande térasse en travertin"
              />
              <img
              className="carousel_reno_img"
              src={Other3}
              alt="couloir en parquet massif et wc en carreaux de ciment"
              />
              <img
              className="carousel_reno_img"
              src={Cuisine2}
              alt="grande cuisine bleu ciel avec un coté vintage et hotte noire"
              />
              <img
              className="carousel_reno_img"
              src={Bellevue1}
              alt="renovation complete grand sallon et escalier fait sur mesure"
              />
              <img
              className="carousel_reno_img"
              src={Bellevue2}
              alt="renovation complete de deux chambres sol carrelage imitation parquet ambiance cosy"
              />

              <img
              className="carousel_reno_img"
              src={Other6}
              alt="sol carrelage imitation parquet et couloir en carreaux de ciment bleu à l'ancienne"
              />
              <img
              className="carousel_reno_img"
              src={Other7}
              alt="sol carreaux de ciment"
              />
              <img
              className="carousel_reno_img"
              src={Appart}
              alt="appartement rénové sol en parquet kitchennette grise et blanche"
              />

            </CarouselReno>
          </div>
      </article>
      </section>
  </main>
  )
}
