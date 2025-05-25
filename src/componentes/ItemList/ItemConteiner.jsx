import React from 'react'
import BotonProduct from './BotonProduct'

const ItemConteiner = ({ProductName}) => {
  return (
    <>
    <div className='productContainer'>
        <img src='src\assets\armors-03.png'/>
        <h3> {ProductName}</h3>
        <BotonProduct/>
    </div>
    </>
  )
}

export default ItemConteiner