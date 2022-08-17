import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': sessionStorage.getItem("token")
}

export const postPostThunk = createAsyncThunk(
  "POST_POST",
  async (payload, thunkAPI) => {
    console.log("들어와라");
    try { 
      console.log("들어와라222");
      console.log(sessionStorage.getItem("token"));
      const data = await instance.post("auth/posts", payload, { 
        headers: headers
        // headers: {
        //   "Content-Type": "multipart/form-data",
        //   withCredentials: true,
        //   Authorization: sessionStorage.getItem("token")
        // }
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return console.log(e);
    }
  }
);


const initialState = {
  post: [],
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [postPostThunk.fulfilled]: (state, action) => {
      state.post = [...state.post, action.payload];
    },
    [postPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postPostThunk.pending]: (state, action) => {
      
    },

  },
});

// export const {} = postsSlice.actions;
export default postSlice.reducer;
