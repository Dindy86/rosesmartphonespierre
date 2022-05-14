import React from 'react'
import {useState} from 'react'

export const Itemcount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)
  const handlerSubstract = () => {
    if(count > 1) {
      setCount(count-1);
    }
  }
  const handlerAdd =  () => {
    if(count < stock) {
      setCount(count + 1);
    }
  }
  
  return (
    <div>
      <div>
        <button onClick={handlerSubstract}>-</button>
          <span>{count}</span>
        <button onClick={handlerAdd}>+</button>
      </div>
      <div>
        <button onClick={ () => { onAdd(count) }}> Agregar al Carrito </button>
      </div>
    </div>
  )
}

export default Itemcount;