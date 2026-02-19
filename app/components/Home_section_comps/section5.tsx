import { Box, Button, TextField, Typography } from "@mui/material";
import subscribeImg from "~/assets/images/SubscribeImgs/SubscribeImg2.jpg";

export default function Section5() {
  return (
    <Box
      sx={{
        minHeight: {xs: "600px", md: "500px"},
        bgcolor: "red",
        backgroundImage: `url(${subscribeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: { xs: 6, md: 5 },
        alignItems: "center",
        px: { xs: 2, md: 0 },
        py: { xs: 4, md: 0 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5em", sm: "1.8em", md: "2.3em" },
          width: { xs: "100%", sm: "80%", md: "50%" },
          color: "white",
          fontWeight: "light",
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 3,
          textShadow: "0px 2px 8px rgba(0,0,0,0.85)",
        }}
      >
        Keep yourself updated on the latest luxury property available
      </Typography>

      <Box
        sx={{
          width: { xs: "95%", sm: "80%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: {xs: 3,md: 2},
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
          }}
        >
            <TextField
            variant="outlined"
            placeholder="Email"
            size="small"
            sx={{
                width: { xs: "100%", sm: "70%" },

                "& .MuiOutlinedInput-root": {
                height: 47, // controlled premium height
                borderRadius: 5,
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",

                "& fieldset": {
                    borderColor: "rgba(255,255,255,0.7)",
                    borderWidth: "1.5px",
                },

                "&:hover fieldset": {
                    borderColor: "white",
                },

                "&.Mui-focused fieldset": {
                    borderColor: "white",
                },
                },

                "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
                color: "white",
                },

                "& .MuiOutlinedInput-input::placeholder": {
                color: "white",
                opacity: 1,
                },

                "& .MuiInputLabel-root": {
                display: "none",
                },
            }}
            />

            <Button
            sx={{
                width: { xs: "50%", sm: "25%" },
                height: "90%", // match TextField height
                fontSize: { xs: "1em", md: "1.2em" },
                letterSpacing: 2,
                bgcolor: "white",
                borderRadius: 5,
                fontWeight: "bold",
                color: "black",
                "&:hover": {
                bgcolor: "rgba(255,255,255,0.85)",
                },
            }}
            >
            SIGN UP
            </Button>
        </Box>

        <Typography
        variant="body2"
        sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "0.7em", md: "0.9em", xl: "1em" },
            lineHeight: 1.6,
            textShadow: "0px 1px 4px rgba(0,0,0,0.9), 0px 0px 12px rgba(0,0,0,0.7)",
        }}
        >
        By subscribing to Aspire & Co. Realty, you agree to receive email
        communications regarding new property listings, market updates, and
        promotional content. You acknowledge that your information will be handled
        in accordance with our Privacy Policy. You may unsubscribe at any time by
        clicking the unsubscribe link included in our emails. Standard data rates
        may apply.
        </Typography>
      </Box>
    </Box>
  );
}