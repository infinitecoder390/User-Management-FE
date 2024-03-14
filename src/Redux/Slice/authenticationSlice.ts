import { jwtDecode } from "jwt-decode";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN, REGISTER } from "../../Components/common/constants";
import { toast } from "react-toastify";
import { API } from "../../Components/common/Api";
export interface AuthenticationState {
  isLoggedIn: boolean;
  jwtToken: string;
  error: string | undefined;
}
const initialState: AuthenticationState = {
  isLoggedIn: false,
  jwtToken: "",
  error: undefined,
};
export const login = createAsyncThunk(
  "authentication/login",
  async (credentials: { username: string; password: string }) => {
    const response = await API.post(LOGIN, credentials);
    return response;
  }
);
export const registerUser = createAsyncThunk(
  "authentication/register",
  async (userData: { username: string; password: string }) => {
    const response = await API.post(REGISTER, userData);
    return response;
  }
);
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          sessionStorage.setItem("jwtToken", action.payload.data.accessToken);
          const decodedToken: { sub: string } = jwtDecode(
            action.payload.data.accessToken
          );
          sessionStorage.setItem("userid", decodedToken.sub);
          state.jwtToken = action.payload.data.accessToken;
          state.isLoggedIn = true;
          state.error = undefined;
          toast.success("User logged in successfully");
        }
      })
      .addCase(login.rejected, (state, action) => {
        toast.error("Invalid username or password");
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.status === 201 || action.payload.status === 200) {
          toast.success("User registration completed");
        }
      });
  },
});

export const { logout, setJwtToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
