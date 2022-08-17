import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

const initialState = {
  likes: [],
};

export const postLike = async (data) => {
  console.log(data);
  return async function (dispatch) {
    await instance
      .get(
        `auth/posts/${data}/likes`
      )
      .then((response) => {
        console.log(response.data.postLikesCnt)
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const commentLike = (data) => {
  console.log(data);
  return async function (dispatch) {
    await instance
      .get(
        `auth/comments/{commentId}/likes`, data
      )
      .then((response) => {
        console.log(response)

      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default likeSlice.reducer;
