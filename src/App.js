import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './components/Context/CartContext';
import 'bulma/css/bulma.css';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App(){
    return (
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes >
                        <Route path='/' element={<ItemListContainer greeting={'Todos nuestros Productos'}/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría'}/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

