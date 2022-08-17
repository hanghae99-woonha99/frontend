import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";
import cookies from "react-cookies";

const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': sessionStorage.getItem("token"),
  'Refresh-Token': cookies.load("refresh-token")
}

export const postPostThunk = createAsyncThunk(
  "POST_POST",
  async (payload, thunkAPI) => {
    console.log("들어와라");
    try { 
      // console.log("들어와라222");
      // console.log(sessionStorage.getItem("token"));
      // console.log(sessionStorage);
      const data = await instance.post("auth/posts", payload, { 
        headers: headers
        // headers: {
        //   "Content-Type": "multipart/form-data",
        //   withCredentials: true,
        //   Authorization: sessionStorage.getItem("token")
        // }
      });
      // return thunkAPI.fulfillWithValue(data.data);
      return console.log(data);
    } catch (e) {
      return console.log(e);
    }
  }
);

export const delPostThunk = createAsyncThunk(
  "DEL_POST",
  async (payload, api) => {
    try {
      await instance.delete(`auth/posts/${payload}`);
      return (
        alert("삭제하시겠습니까??"),
        window.location.replace("/")
        )
      //return window.location.replace("/");
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

export const editPostThunk = createAsyncThunk(
  "EDIT_POST",
  async (payload, thunkAPI) => {
    try {
      const  data = await instance.put(
        `auth/posts/${payload}`,
        payload.frm,
        {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
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
