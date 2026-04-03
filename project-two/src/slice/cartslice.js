import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: []
};

const Wishlist = createSlice({
  name: "Wishl",
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
},

    // ❌ Remove single item
    removetowish: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
    },

    // 🧹 Remove all items
    removeall: (state) => {
      state.item = [];
    }

  }
});

// ✅ Export actions
export const { addtowish, removetowish, removeall } = Wishlist.actions;

// ✅ Export reducer
export default Wishlist.reducer;