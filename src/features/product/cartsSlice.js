import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
  let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return {itemsCounter, total}
}
const CartsSlice =  createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const valueId = action.payload.id
      const value = action.payload.id
      if (!state.selectedItems.find((item) => item.id === valueId)) {
        state.selectedItems.push({
          ...value,
          quantity: 1,
        });
      }
      return {
        
        state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    },
    increase: (state, action) => {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        state,
        ...sumItems(state.selectedItems),
      };
    },
    decrease: (state, action) => {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    },
    checkout: () => {
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    },
    clear: () => {
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    },
  },
});
export default CartsSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout, clear } = CartsSlice.actions;
console.log(CartsSlice.actions)
