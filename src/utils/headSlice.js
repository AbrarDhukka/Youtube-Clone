import { createSlice } from "@reduxjs/toolkit";

export const headSlice = createSlice({
  name: "slider",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    menuHandler: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen=false;
    },
  },
});

export const { menuHandler,closeMenu } = headSlice.actions;
export default headSlice.reducer;
