import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
