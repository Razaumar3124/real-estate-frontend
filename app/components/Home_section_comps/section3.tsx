import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import restroImg from "../../assets/images/BentoDesignImgs/restaurant-interior.jpg"
import BentoCard from "~/utils/bentoCard";

export default function Section3() {
  return (
    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        bgcolor: "red",
        mt: 12
    }}
    >
        <Box
        sx={{
            width: "80%",
            display: "flex",
            bgcolor: "yellow",
        }}
        >
            <Box 
            sx={{
                bgcolor: "green",
                width: "33.33%",
                display: "flex",
                flexDirection: "column"
            }}
            >
                <Box
                sx={{
                    width: "90%",
                    height: "40%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // bgcolor: "red"
                }}
                >
                    <Typography 
                    variant="h4"
                    sx={{
                        lineHeight: 1.1,
                        fontWeight: "bold",
                        letterSpacing: 1
                    }}
                    >
                        Our Porfolio of Pioneering Design
                    </Typography>
                    <Typography 
                    variant="body1"
                    sx={{
                        mt: 1,
                        lineHeight: 1.2,
                        letterSpacing: 0.7
                    }}
                    >
                        Explore our selected works that demonstrate our commitment to design excellence, innovation, and client satisfaction
                    </Typography>
                </Box>
                <BentoCard Height="55%" Width="90%" Img={restroImg} Text="New York Office" Title="Office" />
            </Box>
            <Box sx={{bgcolor: "purple", width: "33.33%"}}></Box>
            <Box sx={{bgcolor: "blue", width: "33.33%"}}></Box>
        </Box>
    </Box>
  );
}