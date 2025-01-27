import Calculator from "@/components/Calculator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Calculator />
    </Box>
  );
};

export default Home;
