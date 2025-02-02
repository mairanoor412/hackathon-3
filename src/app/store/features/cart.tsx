import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'




// // Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      add(state , action){
        state.push(action.payload);
      },
      remove(state, action){
        return state.filter((item)=> item._id !== action.payload)
      }
  },
})

export const { add , remove } = cartSlice.actions

export default cartSlice.reducer