import { Box, Card, CardMedia } from "@mui/material";

type validateBentoCard = {
  Height: any;
  Width: any;
  Img: string;
  Text: string;
  Title: string;
};

export default function BentoCard({
  Height,
  Width,
  Img,
  Text,
  Title
}: validateBentoCard) {
  return (
    <Card
      sx={{
        minHeight: Height,
        width: Width,
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",
        border: "2px solid transparent",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow:
            "inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.2)",
          "& .card-image": {
            transform: "scale(1.1)",
            filter: "brightness(0.8)"
          },
          "& .gradient-overlay": {
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)"
          }
        }
      }}
    >
      <CardMedia
        component="img"
        image={Img}
        alt={Title}
        className="card-image"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out"
        }}
      />

      <Box
        className="gradient-overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)",
          pointerEvents: "none",
          transition: "background 0.3s ease-in-out"
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          right: 16,
          color: "white",
          textDecoration: "underline",
          fontFamily: "Afacad Flux",
          zIndex: 1,
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease-in-out",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          "&:hover": {
            textDecoration: "none",
            transform: "translateX(-4px)"
          }
        }}
      >
        {Text}
      </Box>
    </Card>
  );
}
