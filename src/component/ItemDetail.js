import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';
import Itemcount from './Itemcount';


export const ItemDetail = ({smartphoneDetail}) => {
  const [isInCart, setisInCart] = useState(false)
  const {addItem } = useCartContext();

  function onAdd( count ) {
    addItem(smartphoneDetail, count);
    setisInCart(true);
  }

  return (
    <div className="flex flex-row content-center justify-center m-5">
      <div className=" flex flex-col content-center justify-center border-solid border-2 border-indigo-200 w-72">
        <img className="w-72 h-80" src={smartphoneDetail.img} alt={smartphoneDetail.nombre} />
        <h2 className='font-bold'>{smartphoneDetail.nombre}</h2>
        <p><strong>Descripción: </strong>{smartphoneDetail.descripcion}</p>
        <p><strong>Precio: </strong>{smartphoneDetail.precio}$</p>
        {isInCart ? <Link to = "/cart" className="bg-sky-700 text-white my-4 rounded">Ir al carrito</Link>
                    :<Itemcount onAdd = {onAdd} stock = {smartphoneDetail.stock} initialCounter ={1}></Itemcount> 
        }
      </div>
    </div>
  )
}

export default ItemDetail;