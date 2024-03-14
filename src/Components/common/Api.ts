import axios from "axios";
export const API = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: sessionStorage.getItem("jwtToken") || "",
  },
});
