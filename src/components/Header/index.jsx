import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'
import logo from '../../assets/Logo-GR-XL-Rouge.svg'

function Header() {
  return (
    <header className="header_container">
      <div className='logo'>
      <Link className="logo_header" to="/">
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
           {/* <li>
            <a href="/Climatisation">Climatisation</a>
          </li>
          <li>
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