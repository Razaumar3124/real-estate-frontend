import { Box, Typography } from "@mui/material";
import heroImage from "~/assets/images/Hero-section/HSimage1.jpg";

type Section1Props = {
  children?: React.ReactNode;
  bgcolor?: string;
  height?: string | number;
};

export default function Section1({
  children,
  bgcolor = "red",
  height = "100vh",
}: Section1Props) {
  return (
    <Box
      sx={{
        bgcolor,
        height,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
      <Typography>hello</Typography>
    </Box>
  );
}
