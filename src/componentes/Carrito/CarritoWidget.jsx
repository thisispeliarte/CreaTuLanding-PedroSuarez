import React from 'react'
import './Carrito.css';
const CarritoWidget = () => {
    const imgCarrito = "src/assets/shopping-cart_7628172.svg"
  return (
    <div className='boxCarrito'><img className="imgCarrito" src={imgCarrito} alt="IconoCarrito" /></div>
  )
}

export default CarritoWidget
