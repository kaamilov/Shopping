import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:true,
    products:[],
    cart:[]
}
export const getProduct = createAsyncThunk('product/getProduct',
   async function (){
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
   }
)


const productSllice = createSlice({
    name:"product",
    initialState,
    reducers:{
   AddToCard:(state,action)=>{
    const cartItem = state.products.find((item)=>{
        return item.id === action.payload
    })
    state.cart = [...state.cart, cartItem]
   },
   RemoveCardItem:(state,action)=>{
    const removeItem = state.cart.filter((item)=>item.id !== action.payload)
    state.cart = removeItem
   }
    },
    extraReducers:{
 [getProduct.fulfilled]:(state,action)=>{
    state.loading= false
     state.products = action.payload
 },
//  [getProduct.pending]:(state,action)=>{
//     state.loading=true
//     state.loading = action.payload
//  }
    }
})

export default productSllice.reducer
export const {AddToCard, RemoveCardItem}=productSllice.actions