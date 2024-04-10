import { db } from '../../firebase/FirebaseConfig';
import { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../Context/CartContext';
import { getDocs, collection, query, where, addDoc, Timestamp, writeBatch, documentId } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que están fuera de stock')
            }

        } 
        catch (error) {
            console.log(error)
        } 
        finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <div className='mensajeIdCompra'>
                <h1 className='detalleCheckout'>Detalle compra</h1>
                <h2 className='detalleCheckout mensajeprevio mensajeIdCompra'>Se está generando su orden...</h2>
            </div>
        )
    }

    if(orderId) {
        return (
            <div className='mensajeIdCompra'>
                <h1 className='detalleCheckout'>Detalle compra</h1>
                <h2 className='detalleCheckout'>¡Muchas gracias por tu compra!</h2>
                <h2 className='detalleCheckout'>El id de tu compra es: {orderId}</h2>
            </div>
            )
    }

    return (
        <div className='containerCheckout'>
            <h1 className='detalleCheckout'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;