import React, { useEffect, useState } from 'react'
import './ItemList.css';
import { getProductos } from '../../asyncmock';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos,setProductos] = useState([])

  useEffect(()=>{
    getProductos()
    .then(respuesta=> setProductos(respuesta))
    .catch(error => console.log(error))
  },[])

  return (
    <div className='section-1b'>
    <h2 >
      Mis Productos
    </h2>
    
    <ItemList productos={productos} />
    
    
    </div>
  )
}

export default ItemListContainer