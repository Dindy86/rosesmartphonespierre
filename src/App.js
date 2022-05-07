import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="PRODUCTOS"/>} />
        <Route path='/smartphone/:id' element={<ItemDetailContainer titulo="Detalle del producto"/>}/>
        <Route path='marca/:id' element={<ItemListContainer titulo="PRODUCTOS"/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
