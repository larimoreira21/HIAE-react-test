import axios from "axios";

export const API_KEY = "KQ7Z7LNG651KY5ZC";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "application/json",
  },
});
