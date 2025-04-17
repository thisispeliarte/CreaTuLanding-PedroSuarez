import React, { useState } from 'react'
import "./ItemCounter.css"


const ItemCounter = ({stock, inicial, funcionAgregar}) => {
    const[contador,setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador+1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador-1)
        }
    }

    console.log(contador)
 
  return (
    <div className='containerContador'>

    <button  onClick={incrementar}> + </button>
    <p> { contador}</p>
    <button onClick={decrementar}> - </button>
        
        
        
        
    </div>
  )
}

export default ItemCounter