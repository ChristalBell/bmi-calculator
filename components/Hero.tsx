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
    <Box sx={{ marginLeft: "4rem" }}>
      <Box
        className="top"
        sx={{
          backgroundImage: `linear-gradient(0.3turn,${COLORS.white},${COLORS.lightBlue})`,
          borderRadius: "2rem",
          height: "40rem",
          width: "75vw",
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "28vw", paddingLeft: "14rem" }}>
          <Typography
            variant="h1"
            sx={{
              marginBottom: "2rem",
            }}
          >
            {Headlines[0].title}
          </Typography>
          <Typography sx={{ color: COLORS.darkGrey, fontSize: "1.5rem" }}>
            {Headlines[0].info}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "15rem",
        }}
        className="bottom"
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(.5turn,${COLORS.white},${COLORS.lightBlue})`,
            borderRadius: "2rem",
            height: "30rem",
            width: "35vw",
            boxShadow: 1,
          }}
        ></Box>
        <Box sx={{ width: "30vw", alignContent: "center" }}>
          <Typography variant="h1">{Headlines[1].title}</Typography>
          <Typography
            sx={{
              color: COLORS.darkGrey,
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {Headlines[1].info}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
