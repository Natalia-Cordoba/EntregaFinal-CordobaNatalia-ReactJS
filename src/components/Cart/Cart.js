import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if(totalQuantity() === 0) {
        return (
            <div className='container2'>
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className='Option botonCarrito'>Ver productos</Link>
            </div>
        )
    }

    return (
        <div className='container2'>
            <div className='itemsCarrito'>
                <h2>Detalle carrito</h2>
                { cart.map(products => <CartItem key={products.id} products={products}/>) }
                <h3 className="detalleCarrito">Total: ${totalPrice()}</h3>
            </div>
            <div className='containerBotones'>
                <button onClick={() => clearCart()} className='Button botonCarrito'>Limpiar carrito</button>
                <Link to='/checkout' className='Option botonCarrito'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;