import { Box } from "@mui/system";
import { BounceLoader } from "react-spinners";

export default function PageLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vh",
        }}
      >
        <BounceLoader color="#59578e" />
      </Box>
    </Box>
  );
}
