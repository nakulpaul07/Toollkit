import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../features/CaartSliice'

// creat Store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})