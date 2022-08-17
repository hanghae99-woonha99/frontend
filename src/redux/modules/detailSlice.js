import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

export const __getPostDetailThunk = createAsyncThunk(
    "GET_POST_DETAIL",
    async (payload, thunkAPI) => {
      try {
        console.log(payload)
        const res = await instance.get(`posts/${payload}`);
        // console.log(data.data)
        // return thunkAPI.fulfillWithValue(data.data);
        return (
            console.log(res), 
            thunkAPI.fulfillWithValue(res.data.data)
        )
      } catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  );
  

  const initialState = {
    posts: {},
  };
  
  const detailSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
      [__getPostDetailThunk.fulfilled]: (state, action) => {
        //console.log(action)
        state.posts = action.payload;
      },
      [__getPostDetailThunk.rejected]: (state, action) => {
        state.error = action.payload;
      },
    },
  
  })
  

  export default detailSlice.reducer;
  