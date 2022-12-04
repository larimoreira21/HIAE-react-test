import { GetServerSideProps } from "next";
import { Autocomplete, Box, TextField } from "@mui/material";
import api, { API_KEY } from "../../services/api";
import axios, * as others from "axios";

export default function Home(props) {
  const options = [
    { label: "Facebook", id: 1 },
    { label: "Disney", id: 2 },
  ];
  console.log(props);

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
          options={props?.bestMatches || []}
          sx={{ width: 500, alignSelf: "center", paddingBottom: "10px" }}
          renderInput={(params) => <TextField {...params} label="Ações" />}
        />
        <Box
          sx={{
            display: "flex",
            height: "300px",
            padding: "10px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#c0c0c0",
          }}
        >
          Lista
        </Box>
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const response = await api.get(
    `/query?function=SYMBOL_SEARCH&keywords=microsoft&apikey=${API_KEY}`,
  );
  const data = await response.data;
  const newData = data?.bestMatches.map((match, index) => {
    return {
      label: match["1. symbol"],
      id: index,
    };
  });

  return {
    props: {
      bestMatches: newData,
    },
  };
};

// `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=aapl&apikey={API_KEY}`;
