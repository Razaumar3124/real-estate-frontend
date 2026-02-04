import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navData = [
    { path: "/", navName: "SALES" },
    { path: "/services", navName: "ABOUT US" },
    { path: "/about", navName: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed", // NOT absolute
        top: 0,
        left: 0,
        width: "100%",
        height: "16%",
        zIndex: 1300,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
        // bgcolor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "28%",
      }}
    >
      <Box
      sx={{
        height: "60%",
        width: "14%",
        border: "2px solid red",
      }}
      >

      </Box>
      <Box
      sx={{
        height: "60%",
        width: "32%",
        border: "2px solid red",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      >
        {navData.map((val, i)=>(
          <Typography
          key={i}
          sx={{
            fontFamily: "Afacad Flux",
            fontSize: "1.1em",
            color: "#583101",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
          >{val.navName}</Typography>
        ))}
          <Typography
          sx={{
              fontFamily: "Afacad Flux",
              fontSize: "1.1em",
              color: "#583101",
              letterSpacing: "1px",
              cursor: "pointer",
          }}
          >MEDIA</Typography>
      </Box>
    </Box>
  );
}
