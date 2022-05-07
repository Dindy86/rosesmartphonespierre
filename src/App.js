import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      {/*<ItemListContainer titulo="PRODUCTOS"/>*/}
      <ItemDetailContainer titulo="Detalle del producto"/>
    </>
  );
}
export default App;
