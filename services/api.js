import axios from "axios";

export const API_KEY = process.env.API_KEY;

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  headers: {
    "Content-Type": "application/json",
  },
});
