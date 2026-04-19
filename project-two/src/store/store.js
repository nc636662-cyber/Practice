import { configureStore } from '@reduxjs/toolkit'
import wishlis from "../slice/whishListSlice"
import Carts from "../slice/cartSlice"
export const store = configureStore({
  reducer: {
    Wishl:wishlis,
    cart:Carts

  },
})