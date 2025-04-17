import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState();
    const {idItem} = useParams();
    useEffect(() => {console.log("idItem recibido:", idItem);
      getUnProducto(idItem)
        .then((respuesta) => {
          setProductos(respuesta);
        });
    }, [idItem]);
    

  return (
   <>
   <ItemDetail {...producto}/> 
   </>
  )
}

export default ItemDetailContainer