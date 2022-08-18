import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";
//import cookies from "react-cookies";

const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': sessionStorage.getItem("token")
  // 'withCredentials': true,
  //'Refresh-Token': cookies.load("refresh-token")
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
        headers: headers,
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

//게시물 수정
export const editDetailThunk = createAsyncThunk(
  "editDetail",
  async (payload, api) => {
    console.log(payload);
    try {
      const data = await instance.put(`auth/posts/${payload.id}`, 
        payload.frm
        // "data": { 
        //     "title": payload.frm['data'].title,
        //     "descript": payload.frm['data'].descript,
        //   }
      , 
      {
        'Content-Type': 'multipart/form-data'
      }
      );
      console.log("데어어어어",data);
      // return api.fulfillWithValue(payload);
      return console.log(data);
    } catch (error) {
      // return api.rejectWithValue(error);
      return console.log(error);
    }
  }
);

// export const editPostThunk = createAsyncThunk(
//   "EDIT_POST",
//   async (payload, thunkAPI) => {
//     try {
//       const  data = await instance.put(`auth/posts/${payload}`,
//         payload.frm,
//         {
//           "Content-Type": "multipart/form-data",
//           withCredentials: true,
//         }
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

const initialState = {
  post: [],
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [postPostThunk.fulfilled]: (state, action) => {
      state.post = [...state.post, action.payload];
    },
    [postPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postPostThunk.pending]: (state, action) => {
      
    },

    [editDetailThunk.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [editDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

// export const {} = postsSlice.actions;
export default postSlice.reducer;
