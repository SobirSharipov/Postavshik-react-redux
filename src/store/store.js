import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../reduse/contentSlice'
export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})