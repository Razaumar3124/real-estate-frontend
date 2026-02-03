import { Box, Typography, Container } from "@mui/material";
import heroImage from "~/assets/images/Hero-section/HSimage1.jpg";
import ilr from "~/assets/images/Hero-section/interior-living-room.jpg"
import ilr1 from "~/assets/images/Hero-section/interior-living-room1.jpg"
import ilr2 from "~/assets/images/Hero-section/interior-living-room2.jpg"

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
        src={ilr}
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
          bottom: {xs: "3%", lg: "8%"},
          left: {xs: "6%",lg: "4%"},
          fontSize: {xs: "30px", lg:"33px"},
          fontWeight: 500,
          color: "white",
          letterSpacing: {xs: "4px", lg: "5px"},
          lineHeight: "42px"
        }}
      >
        ELEVATING LUXURY REAL ESTATE IN PUNE
      </Typography>
    </Box>
  );
}
