import { configureStore } from "@reduxjs/toolkit";
import { componentSlice } from "./reducer";

const store = configureStore({
  reducer: {
    buttonList: componentSlice,
  },
});

export default store;
