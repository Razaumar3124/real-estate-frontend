import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();

  const [mediaAnchor, setMediaAnchor] = useState<null | HTMLElement>(null);
  const mediaOpen = Boolean(mediaAnchor);

  const navData = [
    { path: "/", navName: "SALES" },
    { path: "/services", navName: "ABOUT US" },
    { path: "/about", navName: "CONTACT" },
  ];

  const mediaData = [
    { path: "/", navName: "PODCAST" },
    { path: "/services", navName: "BLOG" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 50));
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "16%",
        zIndex: 1300,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "28%",
      }}
    >
      {/* LOGO */}
      <Box sx={{ height: "60%", width: "14%" }} />

      {/* NAV LINKS */}
      <Box
        sx={{
          height: "60%",
          width: "32%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navData.map((val, i) => (
          <Typography
            key={i}
            onClick={() => navigate(val.path)}
            sx={{
              fontFamily: "Afacad Flux",
              fontSize: "1.15em",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            {val.navName}
          </Typography>
        ))}

        {/* MEDIA */}
        <Typography
          onMouseEnter={(e) => setMediaAnchor(e.currentTarget)}
          onClick={(e) => setMediaAnchor(e.currentTarget)}
          sx={{
            fontFamily: "Afacad Flux",
            fontSize: "1.15em",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          MEDIA <KeyboardArrowDownIcon sx={{ml: 1}} />
        </Typography>

        {/* DROPDOWN */}
        <Menu
        anchorEl={mediaAnchor}
        open={mediaOpen}
        // onClose={() => setMediaAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              borderRadius: "12px",
              minWidth: "230px",
            },
          },
          list: {
            onMouseLeave: () => setMediaAnchor(null),
          },
        }}
      >
        {mediaData.map((val, i)=>(
          <Box
          key={i}
          sx={{
            fontFamily: "Afacad Flux",
            fontSize: "1.2em",
            letterSpacing: "1px",
            color: "rgb(50,68,89)",
            px: 3,
            py: 1.5,
            cursor: "pointer",
          }}
          >
            {val.navName}
          </Box>
        ))}
      </Menu>
      </Box>
    </Box>
  );
}
