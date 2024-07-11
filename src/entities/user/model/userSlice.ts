// src/entities/user/model/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from "jwt-decode";

type UserState ={
  token: string | null;
  user: any | null;
}

const initialState: UserState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.user = jwtDecode(action.payload);
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, logout } = userSlice.actions;
export default userSlice.reducer;
