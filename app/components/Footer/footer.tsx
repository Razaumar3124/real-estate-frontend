import { Box, Typography, Menu, MenuItem, useTheme, Divider } from "@mui/material";

const ExpData = [
  {
    "num": 25,
    "text": "years of experience in selling and renting luxury residential property."
  },
  {
    "num": 3,
    "text": "countries of practice in Real Estate."
  },
  {
    "num": 1,
    "text": "goal to ensure a transparent, seamless and pleasant transaction for all parties concerned."
  }
]

const footerNav = [
  {
    "header": "Our Services",
    "nav": [
      {
        "Text": "Sales",
        "path": "",
      },
      {
        "Text": "About",
        "Path": "",
      },
      {
        "Text": "Privacy Policy",
        "path": "",
      },
      {
        "Text": "Terms Of Services",
        "Path": "",
      },
      {
        "Text": "Cookies",
        "Path": "",
      }
    ]
  },
  {
    "header": "Follow Us",
    "nav": [
      {
        "Text": "Facebook",
        "path": "",
      },
      {
        "Text": "Instagram",
        "Path": "",
      },
      {
        "Text": "Twitter",
        "path": "",
      },
      {
        "Text": "Linkedin",
        "Path": "",
      },
    ]
  },
]

export default function Footer() {
  return (
    <Box
    sx={{
      // height: "70vh",
      bgcolor: "white",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: {xs: 3, sm: 5, lg: 3},
      alignItems: "center",
      py: 2
    }}
    >
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        // bgcolor: "red",
        width: "90%",
        gap: {xs: 2,sm: 5, xl: 10},
        mt: {xs: 3, md: 5, lg: 3}
      }}
      >
        {
          ExpData.map((val, i)=>(
            <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2
            }}
            >
              <Typography 
              variant="h3"
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: {xs: "2em",md: "2.5em", xl: "3em"},
                fontWeight: "light"
              }}
              >
                {val.num}
              </Typography>
              <Typography 
              variant="h6"
              sx={{
                width: {xs: "280px",md: "290px", xl: "350px"},
                fontFamily: "Afacad Flux",
                fontSize: {xs: "0.9em", xl: "1.1em"},
                lineHeight: "23px",
                color: "rgb(114,126,142)"
              }}
              >
                {val.text}
              </Typography>
            </Box>
          ))
        }
      </Box>
      <Divider 
      sx={{
        width: {xs: "85%", sm: "90%", md: "90%"}
      }}
      />
      <Box
      sx={{
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {xs: "center", sm: "space-between"},
        gap: 2,
        alignItems: "center"
      }}
      >
        <Box
        sx={{
          width: "100px",
          height: "100px",
          bgcolor: "red"
        }}
        >
          logo
        </Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: {xs: 5,md: 8},
          // bgcolor: "yellow"
        }}
        >
          {footerNav.map((val, i)=>(
            <Box
            key={i}
            sx={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            >
              <Typography
              variant="h4"
              sx={{
                fontFamily: "Afacad Flux"
              }}
              >
                {val.header}
              </Typography>
              {val.nav.map((values, j)=>(
                <Typography
                key={j}
                variant="body1"
                sx={{
                  fontFamily: "Afacad Flux",
                  color: "rgb(114,126,142)",
                  cursor: "pointer",
                  fontSize: {xs: "1em",xl: "1.1em"}
                }}
                >
                  {values.Text}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider 
      sx={{
        width: {xs: "85%", sm: "90%", md: "90%"}
      }}
      />
      <Box
      sx={{
        width: "90%",
        display: "flex",
        flexWrap: "wrap-reverse",
        gap: 2,
        justifyContent: {xs: "center",md: "space-between"}
      }}
      >
        <Typography
        variant="body1"
        >
        © 2025 AspireCoRealty. All rights reserved.
        </Typography>
        <Box
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap"
        }}
        >
          <Typography 
          variant="body1"
          sx={{
            fontFamily: "Afacad Flux",
            color: "rgb(114,126,142)"
          }}
          >AspireCoRealty@gmail.com</Typography>
          <Typography 
          variant="body1"
          sx={{
            fontFamily: "Afacad Flux",
            color: "rgb(114,126,142)"
          }}
          >+91 9876543210</Typography>
        </Box>
      </Box>
    </Box>
  );
}