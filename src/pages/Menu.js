import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DataListFood } from "../Data/data";

function Menu() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "#1c253d",
          display: "flex",
          p: 2,
          flexWrap: "wrap",
          justifyContent: " space-around",
        }}
      >
        {DataListFood.map((dataMenu) => (
          <Card
            sx={{
              maxWidth: "400px",
              display: "flex",
              flexDirection: "row",
              flexGrow: "wrap",
              backgroundColor: "#0C356A",
              mb: 4,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "390px", minWidth: "398px" }}
                component={"img"}
                src={dataMenu.Image}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#40F8FF",
                    fontSize: "21px",
                    backgroundColor: "black",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "9px",
                  }}
                  variant="h4"
                  gutterBottom
                  component={"div"}
                >
                  {dataMenu.name}
                </Typography>
                <Typography
                  sx={{
                    color: "Black",
                    fontSize: "21px",
                    backgroundColor: "#FFB000",
                    borderRadius: "6px",
                    textAlign: "center",
                    padding: "9px",
                    fontFamily:"monospace"
                  }}
                  variant="h5"
                  gutterBottom
                  component={"div"}
                >
                  {dataMenu.Price}
                </Typography>
                <Typography sx={{ color: "cyan" , textAlign:"justify",fontFamily:"sans-serif" }} variant="h5" gutterBottom component={"div"}>
                  {dataMenu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Menu;
