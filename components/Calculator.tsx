"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";

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
    <Box
      sx={{
        backgroundColor: COLORS.white,
        boxShadow: 15,
        height: "16rem",
        maxWidth: "35.25rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        position: "absolute",
        top: 275,
        left: 450,
        zIndex: 1,
      }}
    >
      <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Enter your details below
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        <input
          type="radio"
          onClick={() => setSelectedValue("Metric")}
          value="Metric"
          checked={selectedValue === "Metric"}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: ".75rem" }}>
          Metric
        </Typography>

        <input
          type="radio"
          onClick={() => setSelectedValue("Imperial")}
          value="Imperial"
          checked={selectedValue === "Imperial"}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: ".75rem" }}>
          Imperial
        </Typography>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography
            sx={{
              fontSize: ".75rem",
              color: COLORS.grey,
              marginBottom: ".25rem",
            }}
          >
            Height
          </Typography>
          {selectedValue === "Metric" ? (
            <Box sx={{ display: "flex" }}>
              <input
                type="text"
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                style={{ color: COLORS.darkGrey, fontWeight: "bold" }}
              />
              <Typography sx={{ color: COLORS.blue, fontWeight: "bold" }}>
                cm
              </Typography>
            </Box>
          ) : (
            <Box>
              <input
                type="text"
                onChange={(e) => {
                  setFeet(e.target.value);
                }}
                style={{ color: COLORS.darkGrey, fontWeight: "bold" }}
              />
              <Typography sx={{ color: COLORS.blue, fontWeight: "bold" }}>
                ft
              </Typography>
              <input
                type="text"
                onChange={(e) => {
                  setInches(e.target.value);
                }}
                style={{ color: COLORS.darkGrey, fontWeight: "bold" }}
              />
              <Typography sx={{ color: COLORS.blue, fontWeight: "bold" }}>
                in
              </Typography>
            </Box>
          )}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: ".75rem",
              color: COLORS.grey,
              marginBottom: ".25rem",
            }}
          >
            Weight
          </Typography>

          {selectedValue === "Metric" ? (
            <Box sx={{ display: "flex" }}>
              <input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="text"
                style={{ color: COLORS.darkGrey, fontWeight: "bold" }}
              />
              <Typography sx={{ color: COLORS.blue, fontWeight: "bold" }}>
                kg
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                style={{ color: COLORS.darkGrey, fontWeight: "bold" }}
                type="text"
              />
              <Typography sx={{ color: COLORS.blue, fontWeight: "bold" }}>
                lb
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <button
          style={{
            backgroundColor: COLORS.blue,
            color: COLORS.white,
            height: "6rem",
            width: "15rem",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: ".75rem",

            paddingLeft: "1rem",
            marginTop: "1.5rem",
          }}
          onClick={calculateBMI}
        >
          Welcome!
        </button>
        <div style={{ position: "absolute", top: 240, left: 42 }}>
          <Typography sx={{ color: COLORS.white, fontSize: ".45rem" }}>
            Enter your height and weight and youll see your BMI result here
          </Typography>
        </div>

        <Typography>Your BMI is ...</Typography>
        {/* <Typography>{bmi.toFixed(2)}</Typography> */}
        <Typography>{bmi}</Typography>
      </Box>
    </Box>
  );
};

export default Calculator;
