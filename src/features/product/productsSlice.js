import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState = {
 loading:false,
 products:[], 
 error: "" 
};
const  fetchProducts =  createAsyncThunk("products/fetchProducts" , async () => {
  return await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => data);
})

const productsSlice = createSlice({
 name: "products" ,
 initialState,
 extraReducers: (builder) => {
  builder.addCase(fetchProducts.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchProducts.fulfilled , (state , action) => {
    state.loading = false;
    state.products = action.payload;
    state.error = "";
  });
  builder.addCase(fetchProducts.rejected , (state,action) => {
    state.loading = false
    state.products = []
    state.error = action.error.message
  })
 }
});

export default productsSlice.reducer;
export {fetchProducts}





