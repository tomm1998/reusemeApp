import { createSlice } from "@reduxjs/toolkit";
import { USER_STATE_CHANGE } from "./constants";
import { db, auth } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: USER_STATE_CHANGE,
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
