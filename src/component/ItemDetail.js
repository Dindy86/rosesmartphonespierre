import React, { useState } from 'react'
import Itemcount from './Itemcount';

export const ItemDetail = ({smartphoneDetail}) => {
  const [isInCart, setisInCart] = useState(false)

  function onAdd( count ) {
    console.log("Item en Carrito " + count);
    setisInCart(true);
  }
  
  return (
    <div className="flex flex-row content-center justify-center m-5">
      <div className=" flex flex-col content-center justify-center border-solid border-2 border-indigo-200 w-72">
        <img className="w-72 h-80" src={smartphoneDetail.img} alt={smartphoneDetail.nombre} />
        <h2 className='font-bold'>{smartphoneDetail.nombre}</h2>
        <p><strong>Descripción: </strong>{smartphoneDetail.descripcion}</p>
        <p><strong>Precio: </strong>{smartphoneDetail.precio}$</p>
        {isInCart ? <button>Terminar mi Compra</button>
        :<Itemcount onAdd = {onAdd} stock = {smartphoneDetail.stock}></Itemcount> 
        }
      </div>
    </div>
  )
}

export default ItemDetail;