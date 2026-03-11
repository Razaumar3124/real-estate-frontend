import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

interface ContactTextFieldProps extends Omit<TextFieldProps, "variant"> {
  fullWidth?: boolean;
  halfWidth?: boolean;
}

export default function ContactTextField({
  fullWidth,
  halfWidth,
  sx,
  ...props
}: ContactTextFieldProps) {
  return (
    <TextField
      variant="outlined"
      sx={{
        width: halfWidth
          ? { xs: "100%", md: "48.8%" }
          : fullWidth
          ? "100%"
          : { xs: "100%", md: "48.8%" },
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          bgcolor: "#f8f7f4",
          fontFamily: "Afacad Flux, sans-serif",
          transition: "box-shadow 0.25s ease, background-color 0.25s ease",
          alignItems: "flex-start",
          // Reset MUI's built-in multiline padding so we own all spacing
          padding: 0,
          "& fieldset": { border: "1.5px solid #e4e0d8" },
          "&:hover fieldset": { border: "1.5px solid #b8a98a" },
          "&.Mui-focused fieldset": { border: "1.5px solid #8c7a5b" },
          "&.Mui-focused": { bgcolor: "#fff" },
          "& .MuiOutlinedInput-input, & .MuiInputBase-inputMultiline": {
            fontSize: "15px",
            fontFamily: "Afacad Flux, sans-serif",
            color: "#2c2c2c",
            padding: "14px 18px",
            "&::placeholder": {
              color: "#a09882",
              opacity: 1,
            },
          },
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Afacad Flux, sans-serif",
          color: "#a09882",
          fontSize: "14px",
          "&.Mui-focused": { color: "#8c7a5b" },
        },
        ...sx,
      }}
      {...props}
    />
  );
}