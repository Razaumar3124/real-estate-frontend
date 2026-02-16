import { Box } from "@mui/material";

type validateBentoCard = {
    Height: string;
    Width: string;
    Img: string;
    Text: string;
    Title: string;
}

export default function BentoCard({
    Height,
    Width,
    Img,
    Text,  
    Title  
}: validateBentoCard) {
  return (
    <Box
    component="img"
    src={Img}
    alt={Title}
    sx={{
        height: "100%",
        width: "100%",
        fontFamily: "Afacad Flux",
        color: "white",
        textDecorationLine: "underline",
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        objectFit: "cover",
        pr: 2,
        pb: 1
    }}
    >
        {/* {Text} */}
    </Box>
  );
}