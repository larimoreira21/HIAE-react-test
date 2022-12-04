import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { debounce } from "lodash";
import api, { API_KEY } from "../../services/api";

const getSymbols = async (input) => {
  const response = await api.get(
    `/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${API_KEY}`,
  );
  const data = await response.data;

  return data;
};

export default function Home() {
  const [options, setOptions] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const debouncedSearch = debounce(async (search) => {
    const data = await getSymbols(search);

    if (data?.bestMatches?.length > 0) {
      const bestMatchesOptions = data?.bestMatches?.map((match, index) => {
        return {
          ...match,
          label: match["1. symbol"],
          id: index,
        };
      });

      setOptions(bestMatchesOptions);
    }
  }, 300);

  const onChangeInput = async (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          alignSelf: "center",
          padding: "20px",
          boxShadow: 2,
        }}
      >
        <p>Resumo do mercado</p>
        <Autocomplete
          disablePortal
          id="box-options"
          options={options}
          onChange={(e, newValue) => setSelectedSymbol(newValue)}
          sx={{ width: 500, alignSelf: "center", paddingBottom: "10px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Ações"
              onChange={(e) => onChangeInput(e)}
            />
          )}
        />
      </Box>
    </Box>
  );
}
