import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GETUSER } from "../../Components/common/constants";
import { API } from "../../Components/common/Api";

export interface userState {
  user: {};
  inventoryList: [];
  error: string | undefined;
}
const initialState: userState = {
  user: {},
  inventoryList: [],
  error: undefined,
};
export const getUser = createAsyncThunk(
  "users/getUser",
  async (userId: string) => {
    const response = await API.get(`${GETUSER}/${userId}`);
    return response;
  }
);
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload.status === 200 || action.payload.status === 201) {
        state.user = action.payload.data;
        state.inventoryList = action.payload.data.inventory;
      }
    });
  },
});
export const {} = usersSlice.actions;

export default usersSlice.reducer;
