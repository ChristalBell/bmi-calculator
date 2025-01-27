"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Calculator = () => {
  const [selectedValue, setSelectedValue] = useState("Metric");
  return (
    <Box>
      <Typography>Enter your details below</Typography>
      <Box>
        <input
          type="radio"
          onClick={() => setSelectedValue("Metric")}
          value="Metric"
          checked={selectedValue === "Metric"}
        />
        <Typography>Metric</Typography>

        <input
          type="radio"
          onClick={() => setSelectedValue("Imperial")}
          value="Imperial"
          checked={selectedValue === "Imperial"}
        />
        <Typography>Imperial</Typography>
      </Box>
    </Box>
  );
};

export default Calculator;
