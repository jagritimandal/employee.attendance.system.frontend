// src/ep1.js
import axios from "axios";

const ep1 = axios.create({
  baseURL: "https://employee-attendance-system-1w50.onrender.com",
  //baseURL: "http://localhost:5000", // no spaces
  headers: {
    "Content-Type": "application/json",
  },
});

export default ep1;
