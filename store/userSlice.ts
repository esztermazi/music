import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: {
    username: string;
  } | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string }>) => {
      state.user = { username: action.payload.username };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
