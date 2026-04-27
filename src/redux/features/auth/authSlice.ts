// features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import { getUser, setUser, clearUser } from "@/lib/auth";

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  user: getUser(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string;
        user: User;
      }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      setUser(action.payload.user);
    },
  
    logout: (state) => {
      state.token = null;
      state.user = null;
      clearUser();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;


