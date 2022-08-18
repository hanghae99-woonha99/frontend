import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../shared/Request";


const initialState = {
  likes: 0,
};

export const __doLikeThunk = createAsyncThunk(
  "DO_LIKE_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`auth/posts/${payload}/likes`);
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data.postLikeCnt);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getLikeDetailThunk = createAsyncThunk(
  "GET_LIKE_DETAIL",
  async (payload, thunkAPI) => {
    try {
      console.log(payload)
      const res = await instance.get(`posts/${payload}`);
      // console.log(data.data)
      // return thunkAPI.fulfillWithValue(data.data);
      return (
          console.log(res.data.data.postLikeCnt), 
          thunkAPI.fulfillWithValue(res.data.data.postLikeCnt)
      )
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __doCommentLikeThunk = createAsyncThunk(
  "DO_Comment_LIKE_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`auth/posts/${payload}/likes`);
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data.postLikeCnt);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommentLikeDetailThunk = createAsyncThunk(
  "GET_LIKE_DETAIL",
  async (payload, thunkAPI) => {
    try {
      console.log(payload)
      const res = await instance.get(`posts/${payload}`);
      // console.log(data.data)
      // return thunkAPI.fulfillWithValue(data.data);
      return (
          console.log(res.data.data.postLikeCnt), 
          thunkAPI.fulfillWithValue(res.data.data.postLikeCnt)
      )
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// export const postLike = async (data) => {
//   return async function (dispatch) {
//     await instance
//       .get(
//         `auth/posts/${data}/likes`
//       )
//       .then((response) => {
//         return console.log(response)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const commentLike = (data) => {
//   console.log(data);
//   return async function (dispatch) {
//     await instance
//       .get(
//         `auth/comments/{commentId}/likes`, data
//       )
//       .then((response) => {
//         console.log(response)

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: {
    [__doLikeThunk.fulfilled]: (state, action) => {
      console.log(action)
      state.likes = action.payload;
    },
    [__doLikeThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getLikeDetailThunk.fulfilled]: (state, action) => {
      console.log(action)
      state.likes = action.payload;
    },
    [__getLikeDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default likeSlice.reducer;
