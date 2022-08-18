import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// instance.interceptors.request.use(
//   function (config) {
//     // 요청 성공 직전 호출됩니다.
//     // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
//     sessionStorage.getItem();
//     return config;
//   },
//   function (error) {
//     // 요청 에러 직전 호출됩니다.
//     console.log(error)
//     if (error.response && error.response.status === 403) {
      
//     }
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   function (response) {
//     /*
//       http status가 200인 경우
//       응답 성공 직전 호출됩니다. 
//       .then() 으로 이어집니다.yar
//   */
//     return response;
//   },

//   function (error) {
//     /*
//       http status가 200이 아닌 경우
//       응답 에러 직전 호출됩니다.
//       .catch() 으로 이어집니다.    
//   */
//     return Promise.reject(error);
//   }
// );

const sessionStorage = window.sessionStorage;
const token = sessionStorage.getItem("token");

// const token = localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default instance;
