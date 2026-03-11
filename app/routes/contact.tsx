import { useState } from "react";
import HeaderContent from "~/utils/headerContent";
import ilr from "../assets/images/HeaderContentImgs/contactheaderImg1.jpg";
import {
  Box,
  Button,
  Divider,
  Snackbar,
  Alert,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import ContactTextField from "~/utils/ContactTextField";

// ─── Info Card ───────────────────────────────────────────────────────────────
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

function InfoCard({ icon, title, lines }: InfoCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        p: { xs: 2.5, md: 3 },
        borderRadius: "16px",
        bgcolor: "#faf9f6",
        border: "1.5px solid #ede9e0",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          boxShadow: "0 6px 28px rgba(140,122,91,0.12)",
          borderColor: "#b8a98a",
        },
      }}
    >
      <Box
        sx={{
          minWidth: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "#2c2c2c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8d9be",
          fontSize: "20px",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Afacad Flux, sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#8c7a5b",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        {lines.map((line, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Afacad Flux, sans-serif",
              fontSize: "15px",
              color: "#3d3730",
              lineHeight: 1.65,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [snackOpen, setSnackOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    // Add your submit logic here
    setSnackOpen(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* ── Header ── */}
      <HeaderContent
        img={ilr}
        content1="CONTACT"
        content2="Have questions or need assistance? Our team is ready to help you with all your real estate needs."
      />

      {/* ── Page Body ── */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 5, md: 8 },
        }}
      >
        {/* ── Section Label ── */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "Afacad Flux, sans-serif",
              fontSize: "12px",
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8c7a5b",
              mb: 1,
            }}
          >
            Reach Out
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Afacad Flux, sans-serif",
              fontWeight: 300,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: 4,
              color: "#1e1b16",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            Get In Touch
          </Typography>
          <Divider
            sx={{
              mt: 2.5,
              width: 60,
              borderColor: "#8c7a5b",
              borderWidth: 1.5,
            }}
          />
        </Box>

        {/* ── Two-Column Layout ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT: Form ── */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              width: "100%",
            }}
          >
            {/* Row 1: First & Last Name */}
            <ContactTextField
              halfWidth
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
            <ContactTextField
              halfWidth
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />

            {/* Row 2: Email & Phone */}
            <ContactTextField
              halfWidth
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
            />
            <ContactTextField
              halfWidth
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
            />

            {/* Row 3: Subject full width */}
            <ContactTextField
              fullWidth
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange("subject")}
            />

            {/* Row 4: Message textarea */}
            <ContactTextField
              fullWidth
              placeholder="Write your message here..."
              multiline
              rows={isMobile ? 4 : isTablet ? 5 : 6}
              value={form.message}
              onChange={handleChange("message")}
            />

            {/* Submit Button */}
            <Box sx={{ width: "100%", mt: 0.5 }}>
              <Button
                onClick={handleSubmit}
                disableElevation
                sx={{
                  bgcolor: "#2c2c2c",
                  color: "#e8d9be",
                  fontFamily: "Afacad Flux, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  borderRadius: "12px",
                  px: { xs: 4, md: 6 },
                  py: 1.8,
                  width: { xs: "100%", sm: "auto" },
                  transition: "background-color 0.25s ease, transform 0.15s ease",
                  "&:hover": {
                    bgcolor: "#8c7a5b",
                    transform: "translateY(-1px)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>

          {/* ── RIGHT: Info Panel ── */}
          <Box
            sx={{
              width: { xs: "100%", md: "340px" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Intro blurb */}
            <Typography
              sx={{
                fontFamily: "Afacad Flux, sans-serif",
                fontSize: "16px",
                color: "#6b6056",
                lineHeight: 1.8,
                mb: 1,
              }}
            >
              We'd love to hear from you. Fill in the form or reach us directly
              — we typically respond within one business day.
            </Typography>

            <InfoCard
              icon={<MdOutlineEmail />}
              title="Email Us"
              lines={["hello@realestate.com", "support@realestate.com"]}
            />

            <InfoCard
              icon={<IoLocationOutline />}
              title="Visit Us"
              lines={["42 Heritage Lane,", "New York, NY 10001"]}
            />

            <InfoCard
              icon={<LuClock4 />}
              title="Office Hours"
              lines={["Mon – Fri: 9 AM – 6 PM", "Sat: 10 AM – 3 PM"]}
            />

            {/* Map embed placeholder */}
            <Box
              sx={{
                mt: 1,
                borderRadius: "16px",
                overflow: "hidden",
                height: 180,
                border: "1.5px solid #ede9e0",
              }}
            >
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.175!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Success Toast ── */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          sx={{ fontFamily: "Afacad Flux, sans-serif", borderRadius: "12px" }}
        >
          Message sent! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </>
  );
}