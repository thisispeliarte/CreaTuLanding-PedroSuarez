import React, { useState } from 'react'
import ItemCounter from "../ItemCounter/ItemCounter"
import "./ItemDetail.css"
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, stock}) => {


     const [agregarCantidad, setAgregarCantidad] = useState(0)
      
     const manejadorCantidad= (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("Productos agregados:" + cantidad)
      }
  

  return (
    <div className='contenedorItem'>

        <div className="contenedorImg">
        <img src={img} alt={nombre} />

        </div>

        <div className="contenedorDetalles">
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, deserunt quas beatae animi totam optio eaque consequuntur suscipit sint exercitationem quasi dolor facilis eum tempora rerum. Ratione dolores facilis quod!</p>
        {
          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCounter inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }
        
        
        
        </div>


    </div>
  )
}

export default ItemDetail