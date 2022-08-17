import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import userSlice from "../modules/userSlice";
import mainSlice from "../modules/mainSlice";
import detailSlice from "../modules/detailSlice";

const store = configureStore({
  reducer: { 
    post: postSlice,
    posts: detailSlice,
    user: userSlice,
    main: mainSlice
  },
});

export default store;
