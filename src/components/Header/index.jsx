import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'
import logo from '../../assets/Logo-GR-XL-Rouge.svg'
import RGE from '../../assets/clim/logo-QualiPAC-2024-RGE-01.png'

function Header() {
  return (
    <header className="header_container">
      <div className='logo_header'>
        <Link className="logo_RGE" to="https://www.qualit-enr.org/entreprises/georges-renovation/">
        <img
          src={RGE}
          alt="logo RGE Qualipac"
        />
        </Link>
        <Link className="header_GR" to="/">
        <img
          src={logo}
          alt="logo Georges Rénovation à Toulouse"
        />
        </Link>
      </div>



      <nav id="nav">
        <label className='show-menu' htmlFor="show-menu">
          <b>&#9776;</b> 
        </label>
        <input
          autoComplete="off"
          id="show-menu"
          role="button"
          type="checkbox"
        />
        <ul id="menus">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/Renovation">Rénovation</a>
          </li>
          <li>
            <a href="/Climatisation">Climatisation</a>
          </li>
           {/* <li>
            <a href="/Plomberie">Plomberie</a>
          </li>  */}
          <li>
            <a href="/About">A propos</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/MentionsLegales">Mentions Légales</a>
          </li>
        </ul>
      </nav>
      
      
      
      
    </header>
  )
}
export default Header