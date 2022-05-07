import React from 'react'

export const ItemDetail = ({smartphoneDetail}) => {
  return (
    <div className="flex flex-row content-center justify-center m-5">
      <div className=" flex flex-col content-center justify-center border-solid border-2 border-indigo-200 w-72">
        <img className="w-72 h-80" src={smartphoneDetail.img} alt={smartphoneDetail.nombre} />
        <h2 className='font-bold'>{smartphoneDetail.nombre}</h2>
        <p><strong>Descripción: </strong>{smartphoneDetail.descripcion}</p>
        <p><strong>Precio: </strong>{smartphoneDetail.precio}$</p>
      </div>
    </div>
  )
}

export default ItemDetail;