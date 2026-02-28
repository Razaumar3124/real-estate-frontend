import { Box, Typography, Menu, MenuItem, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CiMenuFries } from "react-icons/ci";
import DropdownMenu from "~/utils/DropdownMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const theme = useTheme();

  const navigate = useNavigate();

  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);
  const [desktopAnchor, setDesktopAnchor] = useState<null | HTMLElement>(null);

  const mobileOpen = Boolean(mobileAnchor);
  const desktopOpen = Boolean(desktopAnchor);

  const navData = [
    { path: "/sales", navName: "SALES" },
    { path: "/about", navName: "ABOUT US" },
    { path: "/contact", navName: "CONTACT" },
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
        height: {xs: "14%", md: "16%", xl: "13%"},
        zIndex: 1300,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: {xs: "48%",md: "36%", xl: "44%"},
      }}
    >
      {/* LOGO */}
      <Box sx={{ height: "60%", width: "14%" }} />

      {/* NAV LINKS */}
      <Box
      component="button"
      onClick={(e) => setMobileAnchor(e.currentTarget)}
      sx={{
        display: {xs: "flex", md: "none"},
        bgcolor: "white",
        p: "10px",
        border: "none",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
        <CiMenuFries style={{fontSize: "1.5em"}}/>
      </Box>

      <DropdownMenu
        anchorEl={mobileAnchor}
        open={mobileOpen}
        onClose={() => setMobileAnchor(null)}
        data={[...navData, ...mediaData]} // combine for mobile
        onItemClick={(path) => navigate(path)}
      />

      <Box
        sx={{
          height: "60%",
          width: {md: "34%", xl: "28%"},
          display: {xs: "none", md: "flex"},
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
              fontSize: {md: "1.15em", xl: "1em"},
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            {val.navName}
          </Typography>
        ))}

        {/* MEDIA */}
        <Typography
          onMouseEnter={(e) => setDesktopAnchor(e.currentTarget)}
          onClick={(e) => setDesktopAnchor(e.currentTarget)}
          sx={{
            fontFamily: "Afacad Flux",
            fontSize: {md: "1.15em", xl: "1em"},
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
        <DropdownMenu
          anchorEl={desktopAnchor}
          open={desktopOpen}
          onClose={() => setDesktopAnchor(null)}
          data={mediaData}
          onItemClick={(path) => navigate(path)}
        />
      </Box>
    </Box>
  );
}
