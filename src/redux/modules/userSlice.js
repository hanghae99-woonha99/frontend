import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";
import cookies from "react-cookies";

export const createUser = (data) => {
  return async function (dispatch) {
    // console.log(data);
    await instance
      .post("members/signup", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response);
        if (response.data.success === false) {
          return window.alert(response.data.err.msg);
        } else {
          return window.alert(`${response.data.data.nickname}님 회원가입을 축하드립니다!`), window.location.replace("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
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
            // cookies.save("refresh-token", response.headers["refresh-token"]),
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
  console.log(data);
  return async function (dispatch) {
    await instance
      .post(
        "members/validate/nickname", data
      )
      .then((response) => {
        console.log(response);
        // console.log(response.data.success);
        // console.log(response.err);
        if (response.data.success === true) {   // 중복된 아이디가 아니면
          alert(response.data.data.msg)
          sessionStorage.setItem("idValid", response.data.success)
        } else {                                // 중복된 아이디라면
          alert(response.data.error.msg)
          sessionStorage.setItem("idValid", response.data.success)
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
