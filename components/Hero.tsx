"use client";
import { COLORS } from "@/styles/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Hero = () => {
  const Headlines = [
    {
      title: "Body Mass Index Calculator",
      info: "Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.",
    },
    {
      title: "What your BMI result means",
      info: "A BMI range of 18.5 to 24.9 is considered a healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally,strive for regular physical activity, ideally about 30 minutes daily for five days a week.",
    },
  ];
  console.log(Headlines[0].info);
  return (
    <Box>
      <Box
        className="top"
        sx={{
          backgroundImage: `linear-gradient(0.3turn,${COLORS.skyBlue},${COLORS.blue})`,
          borderRadius: "2rem",
          height: "40rem",
          width: "40rem",
        }}
      >
        <Typography>{Headlines[0].title}</Typography>
        <Typography>{Headlines[0].info}</Typography>
      </Box>

      <Box className="bottom">
        <Typography>{Headlines[1].title}</Typography>
        <Typography>{Headlines[1].info}</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
