import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";


export const __getPostThunk = createAsyncThunk(
  "GET_TODO",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("posts");
      // console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  posts: [],
};

const mainSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostThunk.fulfilled]: (state, action) => {
      console.log(action)
      state.posts = action.payload;
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },

})

export default mainSlice.reducer