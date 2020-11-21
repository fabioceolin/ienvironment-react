import axios from "axios";

const api = axios.create({
  // baseURL: "http://54.233.88.38:8080/api/",
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
