import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "./bmi/bmiSlice";

export const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
