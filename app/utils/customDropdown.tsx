import { Autocomplete, TextField } from "@mui/material";

type validateCustomDropdown = {
    data: string[];
    placeholdername: string;
}

export default function CustomDropdown({
    data,
    placeholdername
}: validateCustomDropdown) {
  return (
    <Autocomplete
        id="location-select"
        options={data}
        slotProps={{
            paper: {    
            sx: {
                bgcolor: "white",
                borderRadius: "12px",   // optional: rounds the dropdown
                fontFamily: "Afacad Flux"
            },
            },
        }}
        renderInput={(params) => (
            <TextField
            {...params}
            placeholder={placeholdername}
            // label=""
            />
        )}
        sx={{
            width: "24.5%",
            "& .MuiOutlinedInput-root": {
            bgcolor: "white",
            cursor: "pointer",
            height: 45,
            borderRadius: "50px",
            fontFamily: "Afacad Flux",
            "& fieldset": { border: "none" },
            "&:hover fieldset": { border: "none" },
            "&.Mui-focused fieldset": { border: "none" },
            "& .MuiOutlinedInput-input": {
                fontSize: "18px",       // change to whatever size you need
                paddingLeft: "10px",     // shifts placeholder + typed text 5px right
            }
            },
        }}
    />
  );
}