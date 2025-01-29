import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const FactorCard = () => {
  const factors = [
    {
      choice: "Healthy Eating",
      outcome:
        " Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      choice: "Regular Exercise",
      outcome:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      choice: "Adequate Sleep",
      outcome:
        " Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];
  return (
    <Box>
      {factors.map((factor) => {
        return (
          <Box key={factor.choice}>
            <Typography>{factor.choice}</Typography>
            <Typography>{factor.outcome}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FactorCard;
