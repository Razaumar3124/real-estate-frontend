import { Box, Typography } from "@mui/material";
import heroImage from "~/assets/images/Hero-section/HSimage1.jpg";

export default function Section1() {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={heroImage}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: {xs: "3%", lg: "6%"},
          left: {xs: "6%",lg: "3%"},
          fontSize: {xs: "30px", lg:"40px"},
          color: "white",
          letterSpacing: {xs: "5px", lg: "5px"},
          lineHeight: "42px"
        }}
      >
        ELEVATING LUXURY REAL ESTATE IN PUNE
      </Typography>
    </Box>
  );
}
