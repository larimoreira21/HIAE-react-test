import React from "react";
// import DateFnsAdapter from "@date-io/date-fns";
// import { Dayjs } from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import {
//   DateRangePicker,
//   DateRange,
// } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function Details() {
  // const [value, setValue] = React.useState < DateRange > [null, null];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "700px",
        // background: "#f1f1f1",
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
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ width: "100px" }}>
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
            borderColor: "#c0c0c0",
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
            borderColor: "#c0c0c0",
          }}
        >
          Gráfico
        </Box>
      </Box>
    </Box>
  );
}

{
  /* <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Check-in", end: "Check-out" }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider> */
}
