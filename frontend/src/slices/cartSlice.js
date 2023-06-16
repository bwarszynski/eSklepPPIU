import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        // Przedmiot do dodania do koszyka
        const item = action.payload;
  
        // Sprawdź czy przedmiot już istnieje w koszyku
        const existItem = state.cartItems.find((x) => x._id === item._id);
  
        if (existItem) {
          // Jeśli istnieje, zaktualizuj ilość
          state.cartItems = state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          );
        } else {
          // Jeśli nie istnieje, dodaj przedmiot do koszyka
          state.cartItems = [...state.cartItems, item];
        }
  
        return updateCart(state);
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
          (x) => x._id !== action.payload
        );
  
        return updateCart(state);
      },
      saveShippingAddress: (state, action) => {
        state.shippingAddress = action.payload
        localStorage.setItem('cart', JSON.stringify(state))
      },
      savePaymentMethod: (state, action) => {
        state.paymentMethod = action.payload;
        localStorage.setItem('cart', JSON.stringify(state));
      },
      clearCartItems: (state, action) => {
        state.cartItems = []
        localStorage.setItem('cart', JSON.stringify(state))
      },
    },
  });
  
export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCartItems, } = cartSlice.actions;

  export default cartSlice.reducer;