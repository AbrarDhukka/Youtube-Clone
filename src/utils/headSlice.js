import { createSlice } from "@reduxjs/toolkit";

export const headSlice = createSlice({
    name:'slider',
    initialState:{
        isMenuOpen : true,
    },
    reducers:{
        menuHandler:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        }
    }
})

export const {menuHandler} = headSlice.actions
export default headSlice.reducer