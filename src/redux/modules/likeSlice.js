import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

const initialState = {
  likes: [],
};

const userSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
