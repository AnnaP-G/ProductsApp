import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66cb50754290b1c4f19a0747.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
