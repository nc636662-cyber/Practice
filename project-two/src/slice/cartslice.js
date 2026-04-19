import { createSlice } from "@reduxjs/toolkit";

// load cart
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
    // ADD
    addToCart: (state, action) => {
      const exist = state.item.find(
        (i) => i.id === action.payload.id
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.item));
    },

    // REMOVE
    removeFromCart: (state, action) => {
      state.item = state.item.filter(
        (i) => i.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.item));
    },

    // ORDER PLACE
    placeOrder: (state) => {
      const oldOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      const newOrder = {
        id: Date.now(),
        items: state.item,
        total: state.item.reduce(
          (t, item) => t + item.price * item.quantity,
          0
        ),
        date: new Date().toLocaleString()
      };

      localStorage.setItem(
        "orders",
        JSON.stringify([...oldOrders, newOrder])
      );

      // clear cart
      state.item = [];
      localStorage.setItem("cart", JSON.stringify(state.item));
    }
  }
});

// total selector
export const selectTotalPrice = (state) =>
  state.cart.item.reduce(
    (t, item) => t + item.price * item.quantity,
    0
  );

export const { addToCart, removeFromCart, placeOrder } =
  CartSlice.actions;

export default CartSlice.reducer;