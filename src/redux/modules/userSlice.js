import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

export const createUser = (data) => {
  return async function (dispatch) {
    console.log(data);
    await instance
      .post("members/signup", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response)
        // if (response.data.success === false) {
        //   return window.alert(response.data.error.message);
        // } else {
        //   return window.alert(`${response.data.data.memberId}님 회원가입을 축하드립니다!`), window.location.replace("/");
        // }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

export const loginUser = (data) => {
  return async function (dispatch) {
    await instance
      .post("members/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          return (
            sessionStorage.setItem("token", response.headers.authorization),
            sessionStorage.setItem("nickname", response.data.data.nickname),
            alert(`${sessionStorage.nickname}님 환영합니다.`),
            window.location.replace("/")
          );
        } else {
          return window.alert(response.data.error.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const validateId = (data) => {
  return async function (dispatch) {
    await instance
      .post("members/validate/nickname" , data, {
        "Content-Type": "application/json",
        withCredentials: true,        
      })
      .then((response) => {
        console.log(response)
      })
  }
}

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
