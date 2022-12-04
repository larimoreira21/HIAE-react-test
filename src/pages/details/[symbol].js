import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDetails } from "./hooks/useDetails";

export default function SymbolDetails() {
  const router = useRouter();
  const { symbol } = router.query;

  const { data, isLoading } = useDetails(symbol);

  if (isLoading) return <p>Loading...</p>;

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
            flexDirection: "column",
            padding: "10px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#c0c0c0",
          }}
        >
          <h1>Detalhes</h1>
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
