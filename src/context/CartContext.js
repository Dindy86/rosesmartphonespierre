import React, { useContext, useState } from 'react'
import { createContext } from "react";


export const CartContext = createContext({});
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  
  const isInCart = (id) => {
    const isItemInCart = cart.some(cart => cart.id === id);
    return isItemInCart;
  }
  
  const addItem = (item, cant, id) => {
    if (isInCart(id)) {
      const newCart = cart.map( cartItem => {
        if (cartItem.id === id) {
          const copiedCartItems = {...cartItem};
          copiedCartItems.cant += cant;
          return copiedCartItems;
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else{
      const newCart = {...item, cant}
      setCart([...cart, newCart]);
    }
  }

  function removeItem(itemId) {
    const copiedCartItems = [...cart]
    const newCart = copiedCartItems.filter(cartItem => cartItem.id !== itemId);
    setCart(newCart);
  }
  
  function clear() {
    setCart(() => []);
  }
  
  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default useCartContext;
