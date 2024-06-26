import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


const ItemDetail = ({ id, name, image, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, image,
        }

        addItem(item, quantity)
    }
    
    return (
        <article className='CardItem CardDetail'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture className='imageContainer'>
                <img src={image} alt={name} className='ItemImg'/>
            </picture>
            <section className='descripcion'>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option botonAgregar'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )    
                }
            </footer>
        </article>
    )
}

export default ItemDetail;