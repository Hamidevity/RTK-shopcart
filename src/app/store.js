import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productsSlice";
import CartsReducer from "../features/product/cartsSlice"
const store = configureStore({
  reducer: {
    carts: CartsReducer,
    products: productsReducer,
  },
});

export default store;
