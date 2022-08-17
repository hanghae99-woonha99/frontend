import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

const initialState = {
  likes: [],
};

export const like = (data) => {
  console.log(data);
  return async function (dispatch) {
    await instance
      .get(
        `/auth/posts/{postId}/likes`, data
      )
      .then((response) => {
        console.log(response)

      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const userSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
