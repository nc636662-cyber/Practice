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

const Wishlist = createSlice({
  name: "Wishl",
  initialState,
  reducers: {

    addtowish: (state, action) => {
  const existItem = state.item.find(
    (item) => item.id === action.payload.id
  );

  if (existItem) {
   
    existItem.quantity += 1;
  } else {
    
    state.item.push({ ...action.payload, quantity: 1 });
  }
  localStorage.setItem("wishlist", JSON.stringify(state.item));
},

  
    removetowish: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.item));
    },

  
    removeall: (state) => {
      state.item = [];
      localStorage.setItem("wishlist", JSON.stringify(state.item));
    }

  }
});


export const { addtowish, removetowish, removeall } = Wishlist.actions;


export default Wishlist.reducer;