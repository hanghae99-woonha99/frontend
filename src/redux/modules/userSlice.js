import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request"


const getPost = () => {
  return function(dispatch){
    instance.get("/").then((res)=> {

    }).catch((err) => {
      console.log("에러 발생")
    })
  }
}


export const createUser = (data) => {
  return async function (dispatch) {

    console.log(data)
    // await instance.post("/members/signup", data)
  
  }
}




const initialState = { 
  users: [],
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})


export default userSlice.reducer;