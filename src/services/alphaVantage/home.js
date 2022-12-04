import api, { API_KEY } from "../api";

export const getSymbols = async (input) =>
  api.get(`/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${API_KEY}`);
