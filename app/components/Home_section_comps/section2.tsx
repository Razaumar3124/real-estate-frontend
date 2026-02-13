import { Box, Typography, useTheme } from "@mui/material";
import Sec2Comp1 from "./section2Comps/sec2Comp1";

export default function Section2() {
  const theme = useTheme();
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}
    >
        <Typography
        component="h1"
        sx={{
            fontSize: {xs: "1.9em", sm: "2.3em",md: "2.7em"},
            width: {xs: "80%", sm: "inherit"},
            color: theme.palette.custom.lightGrey,
            fontWeight: "semi-bold",
            textTransform: "uppercase",
            letterSpacing: 5,
            display: "flex",
            textAlign: "center",
            mt: {xs: 8,sm: 10,md: 13, xl: 11}
        }}
        >
            {/* Own Your Grandeur */}
            {/* Elevate Your Lifestyle */}
            Crafted For Connoisseurs
            {/* Luxury Without Compromise */}
        </Typography>
        <Typography
        component="h5"
        sx={{
            color: "#394B60",
            width: {xs: "90%", sm: "87%", md: "70%", xl: "60%"},
            display: "flex",
            textAlign: "center",
            fontFamily: "Afacad Flux",
            fontSize: {xs: "1.2em",md: "1.4em", xl: "1.2em"},
            // color: theme.palette.custom.lightGrey,
            mt: {xs: 4,sm: 5, md: 6}
        }}
        >
            With over 25 years of industry experience, Aspire & Co Real Estate brings deep market insight and a refined understanding of the luxury property landscape. Recognized for delivering exceptional results, Aspire & Co Real Estate has built a reputation grounded in integrity, transparency, and unwavering professionalism guiding clients through buying and selling with confidence, precision, and dedicated expertise.
        </Typography>
        <Sec2Comp1 />
        <Box sx={{height: "100vh"}}></Box>
    </Box>
  );
}