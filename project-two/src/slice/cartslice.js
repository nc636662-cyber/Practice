import { createSlice } from "@reduxjs/toolkit";

// load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  item: loadCart()
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
    addToCart: (state, action) => {
      const existItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.item));
    },

  
    removeFromCart: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.item));
    },

  
    clearCart: (state) => {
      state.item = [];
      localStorage.setItem("cart", JSON.stringify(state.item));
    },

  
    placeOrder: (state) => {
      state.item = [];
      localStorage.setItem("cart", JSON.stringify(state.item));
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  placeOrder
} = CartSlice.actions;

export default CartSlice.reducer;