import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDetails } from "./hooks/useDetails";
import Chart from "./components/Chart";
import PageLoader from "components/PageLoader";

export default function SymbolDetails() {
  const router = useRouter();
  const { symbol } = router.query;

  const { data, isLoading } = useDetails(symbol);

  if (isLoading) return <PageLoader />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          width: "100%",
          height: "100vh",
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
          data-cy="details-box"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            border: 1,
            borderRadius: "5px",
            borderColor: "#c0c0c0",
          }}
        >
          <h1>Ticker details</h1>
          <p>Ticker: {data?.metaData?.["2. Symbol"]}</p>
          <p>Last Refreshed: {data?.metaData?.["3. Last Refreshed"]}</p>
        </Box>

        <Chart data={data?.timeSeries} />
      </Box>
    </Box>
  );
}
