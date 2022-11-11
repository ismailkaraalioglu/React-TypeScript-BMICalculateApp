import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user: {
    userName: string;
    userWeight: number;
    userHeight: number;
    userBmi: number;
    category?: "Zayif" | "İdeal" | "Kilolu" | "Obez" | null;
  };
  calculatorCompleted?: boolean;
}

const initialState: User = {
  user: {
    userName: "",
    userWeight: 0,
    userHeight: 0,
    userBmi: 0,
    category: null,
  },
  calculatorCompleted: false,
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    setUserBmi: (state, action: PayloadAction<User>) => {
      state.user = action.payload.user;
      const { userBmi } = action.payload.user;
      if (userBmi < 18.5) {
        state.user.category = "Zayif";
      } else if (userBmi > 18.5 && userBmi < 25) {
        state.user.category = "İdeal";
      } else if (userBmi > 25 && userBmi < 30) {
        state.user.category = "Kilolu";
      } else if (userBmi > 30) {
        state.user.category = "Obez";
      }
      state.calculatorCompleted = true;
    },
    changeUser: (state) => {
      state.calculatorCompleted = false;
      state.user = {
        userName: "",
        userHeight: 0,
        userWeight: 0,
        userBmi: 0,
        category: null,
      };
    },
  },
});

export const { setUserBmi, changeUser } = bmiSlice.actions;

export default bmiSlice.reducer;
