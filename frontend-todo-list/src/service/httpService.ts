// httpService.js
import axios from "axios";

const httpService = axios.create({
  baseURL: "https://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpService;
