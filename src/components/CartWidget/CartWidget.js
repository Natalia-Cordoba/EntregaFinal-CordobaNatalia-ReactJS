import "./CartWidget.css";

import cart from "./assets/cart.ico";

const CartWidget = () => {
    return(
        <div className="carrito">
           <img src={cart} alt="cart-widget"/>
           0
        </div>
    )
}

export default CartWidget;