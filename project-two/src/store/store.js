import { configureStore } from '@reduxjs/toolkit'
import wishlis from "../slice/cartslice"
import Carts from "../slice/Cartsliceee"
export const store = configureStore({
  reducer: {
    Wishl:wishlis,
    cart:Carts

  },
})