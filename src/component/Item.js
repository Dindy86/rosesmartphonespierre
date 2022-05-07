import React from 'react'

const Item = ({producto}) => {
  return (
    <div className=" flex flex-col content-center justify-center border-solid border-2 border-indigo-200 w-72">
      <img className="w-72 h-80" src={producto.img} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: {producto.precio}$</p>
    </div>
  )
}

export default Item;