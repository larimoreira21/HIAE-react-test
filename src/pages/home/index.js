import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useRouter } from "next/router";

import { useSymbols } from "./hooks/useSymbols";

export default function Home() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const { options } = useSymbols(search);

  const debouncedSearch = debounce((search) => {
    setSearch(search);
  }, 300);

  const onChangeInput = (e) => {
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
          padding: "0 15px 15px 15px",
          boxShadow: 5,
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: { sm: "18px", md: "22px" },
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
            width: { sm: 200, md: 500 },
            alignSelf: "center",
            background: "#f1f1f1",
            color: "#59578e",
          }}
          renderOption={(props, option) => (
            <Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
              {option.label} ({option.name})
            </Box>
          )}
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
