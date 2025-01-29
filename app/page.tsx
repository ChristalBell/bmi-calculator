import Calculator from "@/components/Calculator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Hero from "@/components/Hero";
import LimitCard from "@/components/LimitCard";
import FactorCard from "@/components/FactorCard";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Calculator />
      <FactorCard />
      <LimitCard />
    </Box>
  );
};

export default Home;
