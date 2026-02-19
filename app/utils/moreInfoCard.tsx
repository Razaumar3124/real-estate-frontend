import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

type validateMoreInfo = {
    Img: string;
    Text1: string;
    Text2: string;
    BtnText: string;
}

export default function MoreInfoCard({
    Img,
    Text1,
    Text2,
    BtnText,
}: validateMoreInfo) {
  return (
    <Card
        sx={{
            width: "93%",
            height: "400px",
            borderRadius: 2,
            bgcolor: "yellow",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover .card-media": {
                transform: "scale(1.08)",
            },
            "&:hover .default-box": {
                opacity: 0,
            },
            "&:hover .default-text": {
                opacity: 0,
                transform: "translateY(10px)",
            },
            "&:hover .hover-box": {
                opacity: 1,
            },
            "&:hover .hover-text": {
                opacity: 1,
                transform: "translateY(0)",
            },
        }}
        >
            <CardMedia
            className="card-media"
            sx={{
                height: "100%",
                transition: "transform 0.5s ease",
            }}
            image={Img}
            title="For Buyers"
            />

            {/* Default Box - hidden on mobile, shown on desktop */}
            <Box
            className="default-box"
            sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                opacity: 1,
                transition: "opacity 0.4s ease",
            }}
            >
                <Typography
                className="default-text"
                variant="h3"
                sx={{
                    fontSize: "2.5em",
                    color: "white",
                    fontWeight: "light",
                    letterSpacing: 2,
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
                >
                    {Text1}
                </Typography>
            </Box>

            {/* Hover Box - always visible on mobile, hover-only on desktop */}
            <Box
            className="hover-box"
            sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
                alignItems: "center",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
                opacity: { xs: 1, md: 0 },
                transition: "opacity 0.4s ease",
            }}
            >
                <Typography
                className="hover-text"
                variant="h3"
                sx={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "2em",
                    color: "white",
                    fontWeight: "light",
                    letterSpacing: 2,
                    opacity: { xs: 1, md: 0 },
                    transform: { xs: "translateY(0)", md: "translateY(20px)" },
                    transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                }}
                >
                    {Text1}
                </Typography>
                <Typography
                className="hover-text"
                variant="h6"
                sx={{
                    width: {xs: "80%", md: "40%"},
                    fontFamily: "Afacad Flux",
                    color: "white",
                    fontWeight: "light",
                    fontSize: {xs: "1em", md: "1.2em"},
                    letterSpacing: 2,
                    textAlign: "center",
                    opacity: { xs: 1, md: 0 },
                    transform: { xs: "translateY(0)", md: "translateY(20px)" },
                    transition: "opacity 0.4s ease 0.25s, transform 0.4s ease 0.25s",
                }}
                >
                    {Text2}
                </Typography>
                <Button
                className="hover-text"
                sx={{
                    color: "white",
                    border: "1.5px solid white",
                    borderRadius: 5,
                    fontSize: "1.1em",
                    px: 4,
                    py: 1,
                    opacity: { xs: 1, md: 0 },
                    transform: { xs: "translateY(0)", md: "translateY(20px)" },
                    transition: "opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s",
                    "&:hover": {
                        bgcolor: "white",
                        color: "inherit"
                    }
                }}
                >
                    {BtnText}
                </Button>
            </Box>
        </Card>
  );
}