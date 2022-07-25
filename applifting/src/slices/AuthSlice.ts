import { createSlice } from "@reduxjs/toolkit";

import { api } from "./APISlice";

import { AuthState } from "../types/storeTypes";

const initialState: AuthState = {
  loggedIn: false,
  access_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      state.loggedIn = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
