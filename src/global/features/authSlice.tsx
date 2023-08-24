import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: { isLoggedIn: boolean } = {
  isLoggedIn: false,
};

export const cookieSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setHasLogin: (state) => {
      return { ...state, isLoggedIn: true };
    },
    setLogin: (state, { payload }: PayloadAction<string>) => {
      Cookies.set("access_token", payload, { expires: 7, secure: true });
      return { ...state, isLoggedIn: true };
    },
    setLogout: (state) => {
      Cookies.remove("access_token");
      localStorage.removeItem("user_data");
      return { ...state, isLoggedIn: false };
    },
  },
});

export const { setLogin, setLogout, setHasLogin } = cookieSlice.actions;

export default cookieSlice.reducer;
