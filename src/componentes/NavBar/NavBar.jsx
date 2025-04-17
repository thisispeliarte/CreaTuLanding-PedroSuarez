import React from 'react'
import { Link, NavLink } from 'react-router-dom';
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
        <li> <NavLink to="/"> Home </NavLink> </li>
        <li> <NavLink to="categoria/Helmet"> Helmets</NavLink></li>
        <li> <NavLink to="categoria/Weapons"> Weapons </NavLink></li>
        <li> <NavLink to="categoria/Pets">  Pets </NavLink></li>
    </ul>
    <CarritoWidget/>
    
    </nav>
    </>
  )
}

export default NavBar