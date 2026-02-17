import { Box, Button, Typography } from "@mui/material";
import restroImg from "../../assets/images/BentoDesignImgs/restaurant-interior.jpg";
import BentoCard from "~/utils/bentoCard";

export default function Section3() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 4, md: 0 }
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "95%", md: "85%", lg: "80%" },
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 3, sm: 3, md: 2 }
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "32%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                lineHeight: 1.2,
                fontWeight: "bold",
                letterSpacing: 1,
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" }
              }}
            >
              Our Portfolio of Pioneering Design
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                lineHeight: 1.6,
                letterSpacing: 0.5,
                fontSize: { xs: "0.95rem", sm: "1rem" }
              }}
            >
              Explore our selected works that demonstrate our commitment to design excellence, innovation, and client satisfaction
            </Typography>
          </Box>

          <BentoCard
            Height={{ xs: 260, sm: 280, md: 320 }}
            Width="100%"
            Img={restroImg}
            Text="New York Office"
            Title="Office"
          />
        </Box>

        {/* MIDDLE COLUMN */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "32%" },
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            gap: 3
          }}
        >
          <BentoCard
            Height={{ xs: 220, sm: 240, md: 300 }}
            Width={{ xs: "50%", sm: "100%" }}
            Img={restroImg}
            Text="Commercial"
            Title="Office"
          />

          <BentoCard
            Height={{ xs: 220, sm: 200, md: 220 }}
            Width={{ xs: "50%", sm: "100%" }}
            Img={restroImg}
            Text="Restaurant"
            Title="Office"
          />
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            width: { xs: "100%", md: "32%" },
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          <BentoCard
            Height={{ xs: 260, sm: 300, md: 470, xl: 530 }}
            Width="100%"
            Img={restroImg}
            Text="Residential"
            Title="Office"
          />

          <Button
            sx={{
              border: "1.5px solid #2E4157",
              color: "#2E4157",
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              borderRadius: 5,
              letterSpacing: 1,
              py: 1.5,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "white",
                bgcolor: "#2E4157"
              }
            }}
          >
            SEE MORE PROJECTS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
