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
      <div className='contador1'>
         <button  onClick={incrementar}> + </button>
    <p> { contador}</p>
    <button onClick={decrementar}> - </button>
        
        
    </div>  
    <div className='conteinerAgregar'>
        <button onClick={()=> funcionAgregar(contador)}> Agregar al carrito </button>
    </div>
   
        
        
        
    </div>
  )
}

export default ItemCounter