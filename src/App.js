import './App.css';
import ItemListContainer from './component/ItemListContainer';
import NavBar from './component/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="HOLA!"/>
    </>
  );
}
export default App;
