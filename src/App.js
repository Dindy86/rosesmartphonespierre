import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';
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
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
