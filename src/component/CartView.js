import React from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';


export const CartView = () => {
  const {cart, removeItem, clear, totalPriceItems} = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <Link to ="/">Volver al catálogo</Link>
        <h2>No hay Artículo en el carrito.</h2>
      </div>
    )
  }else {
    return (
      <div>
        <button onClick={clear}>Vaciar carrito</button>
        {cart.map(itemCart => <div key={itemCart.id}>
          <div className='flex justify-around '>
            <img className="w-12 h-12" src={itemCart.img} alt={itemCart.nombre}></img>
            <h2>{itemCart.nombre}</h2>
            <h2>{itemCart.cant}</h2>
            <h2>{itemCart.precio * itemCart.cant}$</h2>
            <button className='text-rose-500' onClick={() => removeItem(itemCart.id)}> X </button>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>)
        }

        <div>
          <strong>Precio Total:</strong> {totalPriceItems()}$
        </div>

        <Link to="/OrderForm">Realizar Compra</Link>
      </div>
    )
  }
}
