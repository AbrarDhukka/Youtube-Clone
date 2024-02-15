import { configureStore } from '@reduxjs/toolkit'
import headReducer from './headSlice'

export const store = configureStore({
    reducer:{
        head: headReducer,
    }
})