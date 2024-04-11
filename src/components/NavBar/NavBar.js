import 'bulma/css/bulma.css';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <header className='header'>
            <div className='tituloCarrito'>
                <Link to='/'>
                    <h1>Mundo Funko Pop</h1>
                </Link>
                <CartWidget />
            </div>
            <nav className='nav' >
                <div className='Category'>
                    <NavLink to={`/category/starWars`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>STAR WARS</NavLink>
                    <NavLink to={`/category/disney`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DISNEY</NavLink>
                    <NavLink to={`/category/marvel`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>MARVEL</NavLink>
                    <NavLink to={`/category/otros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>OTROS</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;