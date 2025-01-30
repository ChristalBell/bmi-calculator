import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

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
    <Box
      sx={{
        display: "flex",
        backgroundImage: `linear-gradient(0.5turn,${COLORS.white},${COLORS.skyBlue})`,
        color: COLORS.darkGrey,
        height: "35rem",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 3rem",
        borderRadius: "2rem",
        padding: "0 4rem",
      }}
    >
      {factors.map((factor) => {
        return (
          <Box key={factor.choice} sx={{ padding: "0 1.75rem" }}>
            <Typography
              sx={{
                color: COLORS.black,
                fontWeight: "bold",
                marginTop: "8rem",
                marginBottom: "2rem",
              }}
            >
              {factor.choice}
            </Typography>
            <Typography>{factor.outcome}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FactorCard;
