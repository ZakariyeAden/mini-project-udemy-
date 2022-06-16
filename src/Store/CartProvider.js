import React,{useReducer} from 'react'
import CartContext from './Cart-context'

const cartReducer = (state, action) => {
  return
};
const defaultCartState = {
  
};
function CartProvider(props) {
const addItemToCartHandler = item => {};
const removeItemFromCartHandler = id => {};
  const cartContext = {
    items: [],
    total:0.,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  };

  return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
  )
}

export default CartProvider