import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  started: true,
  language: "vi",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  extraReducers: (builder) => {},
  reducers: {
    changeLanguage: (state, action) => {
      const newLanguage = action.payload;
      state.language = newLanguage;
    },
  },
});

export const { changeLanguage } = appSlice.actions;
export const appReducer = appSlice.reducer;
