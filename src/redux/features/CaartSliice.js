import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catrs:[]
}

// card slice
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{

        // add to cart
        addToCart:(state,action)=>{

            const IteamIndex = state.catrs.findIndex((iteam)=>iteam.id === action.payload.id)
            // console.log(IteamIndex)

            if(IteamIndex >=0){
                state.catrs[IteamIndex].qnty +=1
            }else{
                const temp = {...action.payload,qnty:1}
                state.catrs = [...state.catrs,temp]
            }

            // console.log("action",action)
            // state.catrs = [...state.catrs,action.payload]


        },

        // remove Patricular Iteam
        removeToCart:(state,action)=>{
            const data = state.catrs.filter((ele)=>ele.id !== action.payload)
            state.catrs = data
        }

    }
})

export const {addToCart,removeToCart} = cartSlice.actions;

export default cartSlice.reducer;