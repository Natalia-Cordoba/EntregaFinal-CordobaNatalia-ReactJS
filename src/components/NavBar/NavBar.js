import "bulma/css/bulma.css";

import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (
        <section className="hero is-danger">
            <h2>Funko Pop Store</h2>
            <nav className="menu">
                <div className="columns">
                    <div className="column">
                        <button className="botonMenu button is-dark">MARVEL</button>
                    </div>
                    <div className="column">
                        <button className="botonMenu button is-dark">HARRY POTTER</button>
                    </div>
                    <div className="column">
                        <button className="botonMenu button is-dark">DISNEY</button>
                    </div>
                    <div className="column">
                        <button className="botonMenu button is-dark">STAR WARS</button>
                    </div>
                    <div className="column">
                        <button className="botonMenu button is-dark">TODOS LOS PRODUCTOS</button>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </section>
    )
}

export default NavBar;