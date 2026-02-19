import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Section3() {
  return (
    <Box
    sx={{
        bgcolor: "green",
        display: "flex",
        justifyContent: "center",
        mt: 13
    }}
    >
        <Box
        sx={{
            width: "80%",
            bgcolor: "yellow"
        }}
        >
            <Card
            sx={{
            width: 325,
            height: 300,
            bgcolor: "red"
            }}
            >
                <CardContent>
                    <Typography variant="h1"></Typography>
                    <Typography variant="h6"></Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>
  );
}