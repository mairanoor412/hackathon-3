
import { Product } from '@/app/utils/types';
import { client } from '@/sanity/lib/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../store';


interface ProductState {
    data: Product[];
    status:  "LOADING" | "SUCCESS" | "ERROR";
  }
  
  const initialState: ProductState = {
    data: [],
    status: "SUCCESS",
  };



export const STATUSES = Object.freeze(
  {
     SUCCESS: 'SUCCESS',
     ERROR: 'ERROR',
     loading: 'LOADING',
  }
)

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts(state, action:PayloadAction<Product[]>){
      state.data = action.payload;
    },
    setStatus(state, action:PayloadAction<ProductState["status"]>){
      state.status = action.payload;
    }
  },
})

export const {setProducts, setStatus  } = productSlice.actions
export default productSlice.reducer;

// middleware
export function fetchProducts(){
  return async function fetchproductThunk(dispatch:AppDispatch){
    dispatch(setStatus(STATUSES.loading));
    try{
        const query = ` *[_type=='product'][0...9]{
              _id,
              title,
              price,
              "productImage": productImage.asset->url,
              tags[3],
              discountPercentage,
              description,
              isNew,
      }`
      
          const data:Product[] = await client.fetch(query);
          dispatch(setProducts(data));
          dispatch(setStatus(STATUSES.SUCCESS));
    } catch(error){
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR))
      
    }
  }
}



















// // redux/slices/productSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { client } from "@/sanity/lib/client";

// // API call thunk
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const query = `*[_type=='product'][0...9]{
//       _id,
//       title,
//       price,
//       "productImage": productImage.asset->url,
//       tags,
//       discountPercentage,
//       description,
//       isNew
//     }`;

//     const data = await client.fetch(query);
//     return data; // API response
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     status: "idle", // idle | loading | succeeded | failed
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload; // API se aaya data store karein
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default productSlice.reducer;


















1



// // 2
// // interface ProductState {
// //   data: Product[];
// //   status: "idle" | "loading" | "success" | "error";
// // }

// // const initialState: ProductState = {
// //   data: [],
// //   status: "idle",
// // };

// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { client } from "@/sanity/lib/client";

// // export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
// //   const query = ` *[_type=='product'][0...9]{
// //     _id,
// //     title,
// //     price,
// //     "productImage": productImage.asset->url,
// //     tags,
// //     discountPercentage,
// //     description,
// //     isNew
// //   }`;
// //   return await client.fetch(query);
// // });

// // const productSlice = createSlice({
// //   name: "product",
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchProducts.pending, (state) => {
// //         state.status = "loading";
// //       })
// //       .addCase(fetchProducts.fulfilled, (state, action) => {
// //         state.status = "success";
// //         state.data = action.payload;
// //       })
// //       .addCase(fetchProducts.rejected, (state) => {
// //         state.status = "error";
// //       });
// //   },
// // });

// // export default productSlice.reducer;
