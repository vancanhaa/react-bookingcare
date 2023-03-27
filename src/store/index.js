import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.slice";

const rootReducer = {
  auth: authReducer,
};

export const rootStore = configureStore({
  reducer: rootReducer,
});
