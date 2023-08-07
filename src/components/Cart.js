import React from 'react';
import deleteimage from '../pngwing.com.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId)); 
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId)); 
  };

  return (
    <div>
      <h2 className='cart-container'>Cart</h2>
      <ul className='cart-details'>
        {cartItems.map((item) => (
           <li key={item.id} className='list-of-cart'>
             {item.title} - Quantity: {item.quantity}&nbsp;
             <button className='Quantity-Button' onClick={ ()=>handleDecreaseQuantity(item.id)}>-</button>
            <img src={deleteimage} className='cart-image' alt='delete-icon'  onClick={() => handleRemoveFromCart(item.id)}></img>
            <button className='Quantity-Button' onClick={()=>handleIncreaseQuantity(item.id)}>+</button>
          </li>
        ))}
      </ul>
          <div>
      {cartItems.length > 0 && <button className='cart-button' onClick={handleClearCart}>&nbsp;&nbsp;Clear Cart</button>}
      </div>
    </div>
  );
}

export default Cart;
