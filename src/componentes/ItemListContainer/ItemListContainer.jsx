import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
//import { getProductos, getProductosPorCategoria  } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import {db} from '../../service/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams();

       useEffect(()=>{
            
            const misProductos = idCategoria ? query(collection(db,"productos"),where("idCat", "==", idCategoria)) : collection(db, "productos");
    
            getDocs(misProductos)
              .then(res => {
                  const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                  })
                  setProductos(nuevosProductos)
              })
              .catch(error => console.log(error))
              
          },[idCategoria])
 
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