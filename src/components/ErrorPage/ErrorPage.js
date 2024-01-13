import './ErrorPage.css';
import error404 from './assets/error404.svg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='contenedorError'>
            <h1 className='tituloError'>404 NOT FOUND</h1>
            <img className="ErrorImg" src={error404} alt="ErrorImg"/>
            <Link to='/' className='Option botonCarrito botonError'>Volver</Link>
        </div>
    )
}

export default ErrorPage;