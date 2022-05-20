import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import useCartContext from '../context/CartContext';

const CartWidget = () => {
  const {amountItemInCart} = useCartContext();
  if(amountItemInCart()) {
    return (
      <div className='flex justify-center items-center'>
        <FaShoppingCart /> 
        <div>{amountItemInCart() }</div>
      </div>
    )
  } else {
      return (
        <div>
          <FaShoppingCart /> 
        </div>
      )
  }
}

export default CartWidget;