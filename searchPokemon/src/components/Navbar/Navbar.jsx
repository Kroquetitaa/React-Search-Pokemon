import React from 'react'
import { Link } from 'react-router-dom'
import SearchPokemon from '../searchPokemon/SearchPokemon'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar-list'>
            <li>
                <Link to='/home' className='navbar-list__logo'>
                    <img src="/logoPokemon.png" alt="" className='navbar-list__logo'/>
                </Link>
            </li>
            <li>
                <Link to='/search'  className='navbar-list__searchLink'>
                    <p className='navbar-list__search'>Buscador</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar