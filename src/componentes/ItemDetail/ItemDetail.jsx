import React, { useState, useContext } from 'react';
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarAlCarrito } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    };

    return (
        <div className='contenedorItem'>
            <div className="contenedorImg">
                <img src={img} alt={nombre} />
            </div>

            <div className="contenedorDetalles">
                <h3>Nombre: {nombre}</h3>
                <p>Precio: ${precio}</p>
                <p>ID: {id}</p>
                <p>Lorem ipsum dolor sit amet consectetur...</p>

                {
                    agregarCantidad > 0
                        ? (<Link to="/cart">Terminar Compra</Link>)
                        : (<ItemCounter inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </div>
    );
};

export default ItemDetail;
