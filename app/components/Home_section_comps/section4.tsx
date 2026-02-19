import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import forBuyersImg from "~/assets/images/MoreInfoImgs/forBuyers.jpg"
import MoreInfoCard from "~/utils/moreInfoCard";

export default function Section4() {
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 3,
        alignItems: "center",
        bgcolor: "whitesmoke",
        paddingY: 8,
        mt: 13
    }}
    >
        <MoreInfoCard 
        Img={forBuyersImg} 
        Text1="FOR BUYERS"
        Text2="Discover the ultimate guide to buying property in Barbados. We will help you throughout the entire process."
        BtnText="FIND OUT MORE"
        />
        <MoreInfoCard 
        Img={forBuyersImg} 
        Text1="ABOUT PUNE"
        Text2="Everything you wanted to know about living in Pune."
        BtnText="FIND OUT MORE"
        />
    </Box>
  );
}