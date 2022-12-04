import { Box, Button } from "@mui/material";
import api, { API_KEY } from "../../../services/api";
import Link from "next/link";

const getDetailsDaily = async (input) => {
  const response = await api.get(
    `/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${input}&apikey=${API_KEY}`,
  );
  const data = await response.data;

  return data;
};

export default function id() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "700px",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "10px",
          padding: "30px",
          boxShadow: 2,
          background: "#fff",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="secondary" sx={{ width: "100px" }}>
            Voltar
          </Button>
        </Link>

        <Box
          sx={{
            display: "flex",
            width: "500px",
            height: "100px",
            padding: "10px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#59578e",
          }}
        >
          Detalhes
        </Box>
        <Box>De Até</Box>
        <Box
          sx={{
            display: "flex",
            width: "500px",
            height: "350px",
            padding: "10px",
            marginBottom: "10px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#59578e",
          }}
        >
          Gráfico
        </Box>
      </Box>
    </Box>
  );
}
