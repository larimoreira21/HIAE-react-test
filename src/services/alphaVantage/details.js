import api, { API_KEY } from "../api";

export const getDetails = async (symbol = "MSFT") =>
  api.get(
    `/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`
  );
