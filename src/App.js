import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartView } from './component/CartView';
import Error404 from './component/Error404';
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';
import OrderForm from './component/OrderForm';
import {CartContextProvider} from './context/CartContext';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer titulo="PRODUCTOS"/>} />
          <Route path='/smartphone/:id' element={<ItemDetailContainer titulo="Detalle del producto"/>}/>
          <Route path='marca/:id' element={<ItemListContainer titulo="PRODUCTOS"/>} />
          <Route path='/cart' element={<CartView/>} />
          <Route path='*' element={<Error404/>} />
          <Route path='/OrderForm' element={<OrderForm/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
