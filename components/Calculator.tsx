"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Calculator = () => {
  const [selectedValue, setSelectedValue] = useState("Metric");
  const [bmi, setBmi] = useState<any>(null);
  const [weight, setWeight] = useState<any>(null);
  const [height, setHeight] = useState<any>(null);

  const calculateBMI = () => {
    if (selectedValue === "Metric") {
      const heightSquared = (height / 100) ** 2;

      setBmi(weight / heightSquared);
    } else if (selectedValue === "Imperial") {
      setBmi((weight / height ** 2) * 703);
    }
  };

  return (
    <Box>
      <Typography>Enter your details below</Typography>
      <Box sx={{ display: "flex" }}>
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
      <Box sx={{ display: "flex" }}>
        <Typography>Height</Typography>
        <input
          type="text"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <Typography>cm</Typography>

        <Typography>Weight</Typography>
        <input
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          type="text"
        />
        <Typography>kg</Typography>
      </Box>
      <Box>
        <button onClick={calculateBMI}>Calculate </button>
        <Typography>Your BMI is ...</Typography>
        <Typography>{bmi}</Typography>
      </Box>
    </Box>
  );
};

export default Calculator;
