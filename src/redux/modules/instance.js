import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.39.10.121/api/",
});

const token = localStorage.getItem("token");

export default instance;