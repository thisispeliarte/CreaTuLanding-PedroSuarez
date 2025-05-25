import React from 'react'
import { useContext } from 'react'
import {CarritoContext} from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import "./cart.css"
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to="/">Ver Prodcuctos</Link>
            </>
        )
    }


  return (
    <div className='cart-container'>
        {   
        carrito.map(producto => <CartItem key={producto.item.id} {...producto}/> )
        }
        <h3>Total: ${total}</h3>
        <h3>Cantidad total:{cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}> Vaciar Carrito</button>
        <Link to="/checkout"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart