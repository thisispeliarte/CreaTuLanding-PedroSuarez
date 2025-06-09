import React from 'react'
import './Carrito.css'
import { useContext } from "react"
import {CarritoContext} from '../../context/CarritoContext'
import { Link } from "react-router-dom"

const CarritoWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "/shopping-cart_7628172.svg"
  return (
    <Link to="/Cart">
      
      
      <img className='carrito' src='/shopping-cart_7628172.svg'/>
     {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
  
    </Link>
  )
}

export default CarritoWidget
