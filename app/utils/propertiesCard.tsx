import { Box, Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import rowHouse from "~/assets/images/cardImgs/row-house.jpg"
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { TbArrowsMaximize } from "react-icons/tb";

const iconStyle = { marginRight: 2, fontSize: "1.3em" };

const showCase = [
    {
        icons: <LiaBedSolid style={iconStyle} />,
        text: "3 Beds"
    },
    {
        icons: <PiBathtub style={iconStyle} />,
        text: "3 Bathrooms"
    },
    {
        icons: <TbArrowsMaximize style={iconStyle} />,
        text: "1300 sqft"
    },
]

export default function PropertiesCard() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 325,
        height: 350,
      }}
    >
      <Card
        sx={{
          width: 325,
          height: "inherit",
          clipPath: "path('M 20 0 L 305 0 Q 325 0, 325 20 L 325 260 Q 325 290, 295 290 L 300 290 Q 260 290, 265 330 Q 265 345, 245 350 L 20 350 Q 0 350, 0 330 L 0 20 Q 0 0, 20 0 Z')",
          bgcolor: "white",
        }}
      >
        <CardMedia
            sx={{ height: 160 }}
            image={rowHouse}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" sx={{fontFamily: "Afacad Flux", color: "#2E4157", display: "flex", alignItems: "end"}} component="div">
                ₹ 94.0
                <Typography variant="body1" sx={{fontWeight: "semi-bold"}}>/Lakh</Typography>
            </Typography>
            <Typography variant="h6" sx={{ width: "85%", color: '#2E4157', fontFamily: "Afacad Flux", fontWeight: "semi-bold", lineHeight: "23px" }}>
            Lizards are a widespread group of squamate reptiles
            </Typography>
            <Typography variant="body1" sx={{mt: 0.5, color: "text.secondary", fontFamily: "Afacad Flux"}}>
                Non negotiable
            </Typography>
            <Divider sx={{mt: 1, width: "80%"}}/>
            <Box
            sx={{
                height: 50,
                display: "flex",
                gap: 1.2,
            }}
            >
                {showCase.map((val, i)=>(
                    <Typography key={i} variant="body2" sx={{fontFamily: "Afacad Flux", display: "flex", color: "text.secondary", alignItems: "center"}}>{val.icons}{val.text}</Typography>
                ))}
            </Box>

        </CardContent>
      </Card>
      <Button
        sx={{
          width: 50,
          height: 50,
          minWidth: 50,
          bgcolor: "#2E4157",
          position: "absolute",
          fontSize: "1.5em",
          bottom: 3,
          right: 3,
          borderRadius: "50%",
          color: "white",
          "&:hover": {
            border: "2px solid #2E4157",
            bgcolor: "inherit",
            color: "#2E4157",
          }
        }}
      >
        ↗
      </Button>
    </Box>
  );
}