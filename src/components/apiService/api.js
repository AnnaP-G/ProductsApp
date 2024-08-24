import axios from "axios";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
