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
        console.log(response);
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

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
