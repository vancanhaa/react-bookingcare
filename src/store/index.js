import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/app.slice";
import { authReducer } from "./reducers/auth.slice";

const rootReducer = {
  auth: authReducer,
  app: appReducer,
};

export const rootStore = configureStore({
  reducer: rootReducer,
});
