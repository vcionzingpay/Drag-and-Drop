import { createSlice } from "@reduxjs/toolkit";

export const componentSlice = createSlice({
  name: "filters",
  initialState: [
    {
      id: "",
      type: "",
      name: "",
    },
  ],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    changeFilterName: (state, action) => {
      state.name = action.payload;
    },
  },
});
