import React from 'react'
import CarritoWidget from '../Carrito/CarritoWidget'
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <nav>
    <h1>
        Cynaborgs 
    </h1>

    <ul>
        <li>Cascos</li>
        <li>Armas</li>
        <li>Animales</li>
        <li>Universos</li>
    </ul>
    <CarritoWidget/>
    
    </nav>
    </>
  )
}

export default NavBar