import Calculator from "@/components/Calculator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Hero from "@/components/Hero";
import LimitCard from "@/components/LimitCard";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Calculator />
      <LimitCard />
    </Box>
  );
};

export default Home;
