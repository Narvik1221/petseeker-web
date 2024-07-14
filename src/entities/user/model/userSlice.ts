// src/entities/user/model/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import { UserState } from "./userType";

export const initialState: UserState = {
  token: null,
  user: null,
  phoneNumber: "",
  name: "",
  code: "",
  isConfirm:false
};

const userSlice = createSlice({
  name: "user",
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
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setIsConfirm(state,action:PayloadAction<boolean>){
      state.isConfirm=action.payload
    }
  },
});

export const { setToken, logout, setPhoneNumber, setName, setCode,setIsConfirm } = userSlice.actions;
export default userSlice.reducer;
