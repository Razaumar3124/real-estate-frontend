import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomDropdown from "~/utils/customDropdown";

const locations = [
    "Kharadi",
    "Magarpatta",
    "Keshav Nagar",
    "Mundhwa",
    "Koregaon Park",
    "Kalyani Nagar",
    "Viman Nagar",
]

const propertyType = [
    "Residensial",
    "Commercial",
]

const priceRange = [
    "45L - 75L",
    "75L - 1CR",
    "1CR - 1.5CR",
    "1.5CR - 2CR",
    "2CR - 3CR",
    "3CR - 5CR",
    "5CR+"
]

export default function Sec2Comp1() {
  return (
    <Box
    sx={{
        width: {xs: "91%", xl: "85%"},
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        columnGap: 1,
        rowGap: 1, 
        mt: 6
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
                fontFamily: "Afacad Flux",
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
        <CustomDropdown data={propertyType} placeholdername="Property type"/>
        <CustomDropdown data={priceRange} placeholdername="Price range"/>
        
        <Box
        sx={{
            color: "white",
            bgcolor: "#2E4157",
            width: "24.5%",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            letterSpacing: 4,
        }}
        >
            SEARCH
        </Box>
    </Box>
    
  );
}