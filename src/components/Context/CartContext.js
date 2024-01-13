import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({
    cart: []
});


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (products, quantity) => {
        if(!isInCart(products.id)) {
            setCart(prev => [...prev, {...products, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeProduct = (id) => {
        const cartUpdated = cart.filter(products => products.id !== id)
        setCart(cartUpdated)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(products => products.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalQuantity = ()=> cart.reduce((acumulador, productsActual)=>acumulador + productsActual.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeProduct, clearCart, totalPrice, totalQuantity }}>
            { children }
        </CartContext.Provider>    
    )
};

