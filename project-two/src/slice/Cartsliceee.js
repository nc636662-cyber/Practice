import { createSlice } from "@reduxjs/toolkit";
const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const initialState = {
  item: loadWishlist()
};

const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ Add to wishlist
    addtowish: (state, action) => {
  const existItem = state.item.find(
    (item) => item.id === action.payload.id
  );

  if (existItem) {
    // 👉 agar item already hai → quantity badhao
    existItem.quantity += 1;
  } else {
    // 👉 new item add karo with quantity = 1
    state.item.push({ ...action.payload, quantity: 1 });
  }
  
   localStorage.setItem("wishlist", JSON.stringify(state.item));
},

    // ❌ Remove single item
    removetowish: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.item));
    },

    // 🧹 Remove all items
    removeall: (state) => {
      state.item = [];
        localStorage.setItem("wishlist", JSON.stringify(state.item));
    }

  }
});

// ✅ Export actions
export const { addtowish, removetowish, removeall } = Cart.actions;

// ✅ Export reducer
export default Cart.reducer;