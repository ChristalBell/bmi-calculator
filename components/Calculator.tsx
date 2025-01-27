"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Calculator = () => {
  const [selectedValue, setSelectedValue] = useState("Metric");
  const [bmi, setBmi] = useState<any>(null);
  const [weight, setWeight] = useState<any>(null);
  const [height, setHeight] = useState<any>(null);
  const [feet, setFeet] = useState<any>(null);
  const [inches, setInches] = useState<any>(null);

  const calculateBMI = () => {
    if (selectedValue === "Metric") {
      setBmi(weight / (height / 100) ** 2);
    } else if (selectedValue === "Imperial") {
      const totalInches = Number(feet) * 12 + Number(inches);
      setBmi((weight / totalInches ** 2) * 703);
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

        {selectedValue === "Metric" ? (
          <Box>
            <input
              type="text"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
            <Typography>cm</Typography>
          </Box>
        ) : (
          <Box>
            <input
              type="text"
              onChange={(e) => {
                setFeet(e.target.value);
              }}
            />
            <Typography>ft</Typography>
            <input
              type="text"
              onChange={(e) => {
                setInches(e.target.value);
              }}
            />
            <Typography>in</Typography>
          </Box>
        )}
        <Typography>Weight</Typography>
        {selectedValue === "Metric" ? (
          <Box>
            <input
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              type="text"
            />
            <Typography>kg</Typography>
          </Box>
        ) : (
          <Box>
            <input
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              type="text"
            />
            <Typography>lb</Typography>
          </Box>
        )}
      </Box>
      <Box>
        <button onClick={calculateBMI}>Calculate </button>
        <Typography>Your BMI is ...</Typography>
        <Typography>{bmi.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default Calculator;
