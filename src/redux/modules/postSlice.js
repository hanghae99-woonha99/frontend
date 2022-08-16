import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

const initialState = {
    post : {
        postId: 0,
        title: "",
        descript: "",
        imgUrl: "",
        author: "",
        postLikeCnt: 0,
        commentCnt: 0,
    },
    error: null,
};

export const addPostThunk = createAsyncThunk(
    "POST_POST",
    async (payload, thunkAPI) => {
      try {
        const { data } = await instance.post("auth/posts", payload, {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        });
        return window.location.replace("/");
      } catch (e) {
        return console.log(e);
      }
    }
  );

  export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
      [addPostThunk.fulfilled]: (state, action) => {
        state.posts = [...state.posts, action.payload];
      },
      [addPostThunk.rejected]: (state, action) => {
        state.error = action.payload;
      },
      [addPostThunk.pending]: () => {},
    },
  });

// const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {
//         //리듀서 안에서 만든 함수자체가 리듀서의 로직이자, 액션크리에이터!
//         addPost: (state, action) => {
//             console.log(action)
//             state.name = "한빛"
//         }
//     }
// })

// 액션크리에이터를 컴포넌트에서 사용하기 위해 export 후 컴포넌트에 가서 useselector로 불러옴 
export const { addPost } = postSlice.actions;

export default postSlice.reducer;