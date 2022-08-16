import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import userSlice from "../modules/userSlice";
import mainSlice from "../modules/mainSlice";

const store = configureStore({
  reducer: { 
    post: postSlice,
    user: userSlice,
    main: mainSlice
  },
});

export default store;
