import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

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
    <Box sx={{ display: "flex", margin: "12rem 10rem" }}>
      <Box sx={{ maxWidth: "40vw", marginRight: "10rem" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Limitations of BMI
        </Typography>
        <Typography
          sx={{
            color: COLORS.darkGrey,
            fontSize: ".75rem",
            lineHeight: "1.25rem",
          }}
        >
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </Typography>
      </Box>
      {limits.map((limit) => {
        return (
          <Box
            key={limit.reason}
            sx={{
              color: COLORS.darkGrey,
              height: "8rem",
              width: "12rem",
              padding: "1.5rem",
              backgroundColor: COLORS.white,
              boxShadow: 10,
              borderRadius: "1.25rem",
              display: "grid",
            }}
          >
            <Typography
              sx={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              {limit.reason}
            </Typography>
            <Typography sx={{ fontSize: ".75rem" }}>
              {limit.explanation}
            </Typography>{" "}
          </Box>
        );
      })}
    </Box>
  );
};

export default LimitCard;
