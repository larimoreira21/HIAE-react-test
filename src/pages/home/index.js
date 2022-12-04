import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { debounce } from "lodash";
import api, { API_KEY } from "../../../services/api";
import { useRouter } from "next/router";

const getSymbols = async (input) => {
  const response = await api.get(
    `/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${API_KEY}`,
  );
  const data = await response.data;

  return data;
};

export default function Home() {
  const [options, setOptions] = useState([]);

  const router = useRouter();

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
          padding: "0 15px 15px 15px  ",
          boxShadow: 5,
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "22px",
          background: "#fff",
          color: "#59578e",
        }}
      >
        <h1>Stock finder</h1>

        <Autocomplete
          disablePortal
          id="box-options"
          options={options}
          onChange={(e, newValue) => {
            router.push(`/details/${newValue.label}`);
          }}
          sx={{
            width: 500,
            alignSelf: "center",
            background: "#f1f1f1",
            color: "#59578e",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter stock ticker symbol"
              onChange={(e) => onChangeInput(e)}
            />
          )}
        />
      </Box>
    </Box>
  );
}
