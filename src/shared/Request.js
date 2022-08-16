import axios from "axios";

const instance = axios.create({ 
  baseURL: "http://3.39.10.121/" 
});

const sessionStorage = window.sessionStorage;
const token = sessionStorage.getItem("token");

// const token = localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = token

export default instance;