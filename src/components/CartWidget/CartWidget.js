import "./CartWidget.css";
import cart from "./assets/cart.ico";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return(
        <div>
            <Link to='/cart' className="CartWidget" >
                <img className="CartImg" src={cart} alt="cart-widget"/>
                <span className="numeroProd">{ totalQuantity() }</span>
            </Link>
        </div>
    )
}

export default CartWidget;