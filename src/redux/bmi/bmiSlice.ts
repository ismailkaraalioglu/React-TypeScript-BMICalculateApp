import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface bmiState {
  name: string;
  weight: number;
  height: number;
  bmi: number;
}

const initialState: bmiState = {
  name: "",
  weight: 0,
  height: 0,
  bmi: 0,
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {},
});

export default bmiSlice.reducer;
