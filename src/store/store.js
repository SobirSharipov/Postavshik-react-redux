import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../reduser/counterSlace'
export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})