import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria  } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams();

    useEffect (()=> {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        funcionProductos(idCategoria)
        .then(res => setProductos(res))

    }, [idCategoria])
 
  return (
    <>

<div className='Itemcontainer'>
      <h2 style={{textAlign: "center"}}> Mis Productos</h2>

      </div>
      <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer