import { Link } from 'react-router-dom'
import React from 'react'
import './footer.css'
import LogoWhite from '../../assets/Logo-GR-XL-Blanc.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'


function Footer() {
  return (
    <footer className="footer">
      
       <div className="footer_container">
        <Link className="logo_GR" to="/">
          <img
            className="footer_logo"
            src={LogoWhite}
            alt="logo Georges Rénovation blanc"
          />
        </Link>
        </div>
        
        <div className="footer_info">
        <address className="footer_adresse">
          24 rue Bernadette - 31 100 Toulouse 
          <a href="tel:+33695975087"> Tél. : 06 95 97 50 87 </a> Siren : 898572698 APE: 4322B
        </address>
        </div>

      <div className='center'>
        <div className='reso'>
          <a className="logo_reso"
              href="https://www.instagram.com/georges_renovation/"
              alt="lien instagram"
            >
              <img
                src={instagram}
              alt="lien instagram Georges Rénovation"
              className="logo_reso instagram"
                href="https://www.instagram.com/georges_renovation/"
              />
            </a>
            <a className="logo_reso"
              href="https://www.instagram.com/georges_renovation/"
              alt="lien facebook"
            >

            <img
              src={facebook}
              className="logo_reso facebook"
                alt="lien facebook Georges Rénovation"
                href="https://www.instagram.com/georges_renovation/"
            />
            </a>
         
        </div>
        <div className="contact_footer">
              <button > <a href="/Contact">Contact</a></button>
          </div>
      </div>
      
    </footer>
  )
}
export default Footer
