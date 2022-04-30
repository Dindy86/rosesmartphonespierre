import React from 'react'

const Item = ({producto}) => {
  return (
    <div className="px-2">
      <h2>{producto.marca}</h2>
      <p>{producto.nombre}</p>
      <p>{producto.precio +"$"}</p>
      <hr/>
    </div>
  )
}

export default Item;