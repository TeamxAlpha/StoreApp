
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      console.log(existingItem);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },

    increaseQuantity: (state, action) => {
      const itemToUpdate = state.find((item) => item.id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToUpdate = state.find((item) => item.id === action.payload);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },

  },
});

export const { addToCart , removeFromCart, clearCart,decreaseQuantity,increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
