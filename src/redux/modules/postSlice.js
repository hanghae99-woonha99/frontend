import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "병노"
};


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            console.log(action)
            state.name = "한빛"
        }
    }
})


export const { addPost } = postSlice.actions;

export default postSlice.reducer;