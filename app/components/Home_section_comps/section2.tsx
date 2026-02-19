import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Sec2Comp1 from "./section2Comps/sec2Comp1";
import PropertiesCard from "~/utils/propertiesCard";

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
            lineHeight: "40px",
            display: "flex",
            textAlign: "center",
            mt: {xs: 8,sm: 10,md: 11, xl: 13}
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
            width: {xs: "88%", sm: "87%", md: "73%", xl: "60%"},
            display: "flex",
            textAlign: "center",
            fontFamily: "Afacad Flux",
            fontSize: {xs: "1.1em",md: "1.2em", xl: "1.2em"},
            lineHeight: "25px",
            // color: theme.palette.custom.lightGrey,
            mt: {xs: 4,sm: 5, md: 6, xl: 7.5}
        }}
        >
            With over 25 years of industry experience, Aspire & Co Real Estate brings deep market insight and a refined understanding of the luxury property landscape. Recognized for delivering exceptional results, Aspire & Co Real Estate has built a reputation grounded in integrity, transparency, and unwavering professionalism guiding clients through buying and selling with confidence, precision, and dedicated expertise.
        </Typography>
        <Sec2Comp1 />
        <Box
        sx={{
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {xs: "center", md: "space-around", xl: "left"},
            gap: {xs: 3,sm: 4, xl: 3},
            mt: {xs: 6,md: 8}
        }}
        >
            {
                [1,2,3,4,5,6].map((val, i)=>(
                    <PropertiesCard key={i} />
                ))
            }
        </Box>
        <Button
        sx={{
            border: "1.5px solid #2E4157",
            color: "#2E4157",
            borderRadius: "50px",
            fontSize: "1.1em",
            paddingInline: 4,
            letterSpacing: 2,
            mt: 7,
            "&: hover": {
                bgcolor: "#2E4157",
                color: "white"
            }
        }}
        >
            VIEW ALL
        </Button>
    </Box>
  );
}