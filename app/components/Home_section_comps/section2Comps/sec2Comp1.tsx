import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomDropdown from "~/utils/customDropdown";

const locations = [
    "pune",
    "baner",
    "vimanagar"
]



export default function Sec2Comp1() {
  return (
    <Box
    sx={{
        width: "91%",
        display: "flex",
        justifyContent: "space-between"
    }}
    >
        <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
                width: "49%",
                cursor: "pointer",
                "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                bgcolor: "white",
                height: 45,
                // Remove default border
                "& fieldset": {
                    border: "none",
                },
                // Remove hover border
                "&:hover fieldset": {
                    border: "none",
                },
                // Remove focus border
                "&.Mui-focused fieldset": {
                    border: "none"
                },
                "& .MuiOutlinedInput-input": {
                    fontSize: "18px",       // change to whatever size you need
                    paddingLeft: "5px",     // shifts placeholder + typed text 5px right
                }
                },
            }}
            slotProps={{
                input: {
                startAdornment: (
                    <InputAdornment position="start">
                    <IoSearchOutline size={18} />
                    </InputAdornment>
                ),
                },
            }}
            />

        <CustomDropdown data={locations} placeholdername="Choose location"/>
        <CustomDropdown data={locations} placeholdername="Property type"/>
    </Box>
    
  );
}