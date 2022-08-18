import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

export const __getCommentPostDetailThunk = createAsyncThunk(
  "GET_COMMENT_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      console.log(payload)
      const res = await instance.get(`posts/${payload}`);
      // console.log(data.data)
      // return thunkAPI.fulfillWithValue(data.data);
      return (
          console.log(res.data.data.commentResponseDtoList), 
          thunkAPI.fulfillWithValue(res.data.data.commentResponseDtoList)
      )
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __doCommentLikeThunk = createAsyncThunk(
  "DO_LIKE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`auth/comments/${payload}/likes`);
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const addCommentList = createAsyncThunk(
  'addCommentList',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("auth/comments", payload);
      // return console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const delCommemtThunk = createAsyncThunk(
  "DEL_COMMENT",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`auth/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);

      //return window.location.replace("/");
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getCommentPostDetailThunk.fulfilled]: (state, action) => {
      console.log(action)
      state.comments = action.payload;
    },
    [__getCommentPostDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addCommentList.fulfilled]: (state, action) => {
      console.log(action)
      state.comments = [...state.comments, action.payload];
    },
    [addCommentList.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__doCommentLikeThunk.fulfilled]: (state, action) => {
      console.log(action)
      console.log(state)
      state.comments.map((comment)=>{
        if (comment.commentId === action.payload.commentId) {
        return comment.commentLikeCnt = action.payload.commentLikeCnt
        } 
        return comment
      })
    },
    [__doCommentLikeThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [delCommemtThunk.fulfilled]: (state, action) => {
      console.log(action)
      state.comments = state.comments.filter((comment)=> 
      comment.commentId !== action.payload)
    },
    [delCommemtThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
