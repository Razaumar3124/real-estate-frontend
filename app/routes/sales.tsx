import HeaderContent from "~/utils/headerContent";
import ilr from "../assets/images/HeaderContentImgs/salesheaderImg1.jpg"
import { Box, Typography, useTheme } from "@mui/material";
import Sec2Comp1 from "~/components/Home_section_comps/section2Comps/sec2Comp1";
import PropertiesCard from "~/utils/propertiesCard";

export default function Sales() {
  const theme = useTheme();
  return (
    <>
      <HeaderContent img={ilr} content1="OUR LISTING FOR SALES" content2="View our collection of extraordinary properties."/>
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
            fontSize: {xs: "1.6em", sm: "2em",md: "2.3em"},
            width: {xs: "90%", sm: "inherit"},
            color: theme.palette.custom.lightGrey,
            fontWeight: "semi-bold",
            textTransform: "uppercase",
            letterSpacing: 2,
            lineHeight: "40px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: {xs: 4,sm: 4,md: 5, xl: 7}
        }}
        >
            Own Your Grandeur
            {/* Elevate Your Lifestyle */}
            {/* Crafted For Connoisseurs */}
            {/* Luxury Without Compromise */}
        </Typography>
        <Typography
        component="h5"
        sx={{
            color: "#394B60",
            width: {xs: "88%", sm: "87%", md: "73%", xl: "60%"},
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Afacad Flux",
            fontSize: {xs: "0.9em",md: "1.1em", xl: "1.2em"},
            lineHeight: "25px",
            // color: theme.palette.custom.lightGrey,
            mt: {xs: 1,sm: 3, md: 3, xl: 3}
        }}
        >
            Please click Reset Filters before new search
        </Typography>
        <Sec2Comp1 />
        <Box
        sx={{
            width: {xs: "90%", xl: "86%"},
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {xs: "center", md: "space-around", xl: "left"},
            gap: {xs: 3,sm: 4, xl: 3},
            mt: {xs: 5,md: 6},
            mb: {xs: 6,md: 8}
        }}
        >
            {
                [1,2,3,4,5,6].map((val, i)=>(
                    <PropertiesCard key={i} />
                ))
            }
        </Box>
      </Box>
    </>
  );
}