import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({producto}) => {
  const url =`/smartphone/${producto.id}`;
  return (
    <div className="border-solid border-2 border-indigo-200 w-72" style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
      <img className="w-72 h-80" src={producto.img} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: {producto.precio}$</p>
      <Link to={url}> <button className='text-sky-700'>Ver Mas</button> </Link>
    </div>
  )
}

export default Item;