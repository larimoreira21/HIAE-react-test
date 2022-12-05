import React from "react";
import { Box } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 400,
        padding: "10px",
        marginBottom: "10px",
        border: 1,
        borderRadius: "5px",
        borderColor: "#c0c0c0",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={700}
          height={450}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis allowDataOverflow />
          <Tooltip />
          <Area type="curve" dataKey="close" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
