import { configureStore } from "@reduxjs/toolkit";
import headReducer from "./headSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    head: headReducer,
    chat: chatSlice
  },
});
