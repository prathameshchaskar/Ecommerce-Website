import React from "react";

// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";

// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          Prathamesh Chaskar
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>

        <Typography variant="h5" sx={{ my: 3.1, color: "primary.main" }}>
          420.8k
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        {/* <TriangleImg
          alt="triangle background"
          src="https://tse3.mm.bing.net/th?id=OIP.ApkK0ARmL7hzXvc2AM3pOAHaHk&pid=Api&P=0&h=220"
        /> */}
        <TrophyImg
          alt="trophy"
          src="https://tse3.mm.bing.net/th?id=OIP.xb3WulCT9nkyHV3PdcAwJgAAAA&pid=Api&P=0&h=220"
        />
      </CardContent>
    </Card>
  );
};

export default Achivement;
