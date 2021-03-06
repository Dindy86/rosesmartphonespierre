import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import useCartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {amountItemInCart} = useCartContext();
  if(amountItemInCart()) {
    return (
      <div className='flex justify-center items-center text-white'>
        <Link to ="/cart" className='text-white'><FaShoppingCart /></Link>
        <div>{amountItemInCart() }</div>
      </div>
    )
  } else {
      return (
        <div className='text-white'>
          <Link to ="/cart" className='text-white'><FaShoppingCart /></Link>
        </div>
      )
  }
}

export default CartWidget;