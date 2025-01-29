import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const LimitCard = () => {
  const limits = [
    {
      reason: "Gender",
      explanation:
        "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      reason: "Age",
      explanation:
        "I aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content. ",
    },
    {
      reason: "Muscle",
      explanation:
        "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      reason: "Pregnancy",
      explanation:
        "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
    },
    {
      reason: "Race",
      explanation:
        "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ];
  return (
    <Box>
      {limits.map((limit) => {
        return (
          <Box key={limit.reason}>
            <Typography>{limit.reason}</Typography>
            <Typography>{limit.explanation}</Typography>{" "}
          </Box>
        );
      })}
    </Box>
  );
};

export default LimitCard;
