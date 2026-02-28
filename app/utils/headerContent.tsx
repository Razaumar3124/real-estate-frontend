import { Box, Typography } from "@mui/material";

type validateHeaderContent = {
    img: string;
    content1: string;
    content2: string;
}

export default function HeaderContent({
    img,
    content1,
    content2
}: validateHeaderContent) {
  return (
    <Box
    sx={{
        height: {xs: "60vh", md: "70vh"},
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}
    >
        <Box
        component="img"
        src={img}
        sx={{
          width: {xs: "100%", md: "99.5%"},
          height: {xs: "100%", md: "98%"},
          objectFit: "cover",
          display: "block",
          borderRadius: 1
        }}
      />

      {/* Dark overlay */}
      <Box
      sx={{
          position: "absolute",
          width: {xs: "100%", md: "99.5%"},
          height: {xs: "100%", md: "98%"},
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: 1
      }}
      />

      <Box
      sx={{
        color: "white",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
      }}
      >
        <Typography
        variant="h4"
        sx={{
            fontWeight: "light",
            width: {xs: "85%", sm: "70%", md: "60%", lg: "50%"},
            fontSize: {xs: "1.6em", sm: "2em", md: "2.5em"},
            letterSpacing: 3,
            textShadow: "0px 2px 8px rgba(0,0,0,0.4)",
            textAlign: "center"
        }}
        >
            {content1}
        </Typography>
        <Typography
        variant="body1"
        sx={{
            fontFamily: "Afacad Flux",
            width: {xs: "80%", sm: "65%", md: "55%", lg: "45%"},
            fontSize: {xs: "1em", sm: "1.1em", md: "1.2em"},
            textShadow: "0px 1px 6px rgba(0,0,0,0.4)",
            textAlign: "center",
            letterSpacing: 1.5
        }}
        >
            {content2}
        </Typography>
      </Box>
    </Box>
  );
}