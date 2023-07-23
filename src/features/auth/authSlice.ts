import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserData } from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState): UserData | null =>
  state.auth.user;
