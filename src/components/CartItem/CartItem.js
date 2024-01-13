import { CartContext } from "../Context/CartContext";
import React from "react";
import { useContext } from "react";


const CartItem = ({ products }) => {

    const { removeProduct } = useContext(CartContext)
    return (
        <div className="containerItemCarrito">
            <picture>
                <img src={products.image} alt={products.name} className='detalleCarrito ItemImg'/>
            </picture>
            <h2 className="detalleCarrito">{products.name}</h2>
            <p className="detalleCarrito">Cantidad: {products.quantity}</p>
            <p className="detalleCarrito">Subtotal: {products.quantity * products.price}</p>
            <button className="botonCarrito detalleCarrito" onClick={() => removeProduct(products.id)}>Eliminar</button>          
        </div>
    )
};

export default CartItem;