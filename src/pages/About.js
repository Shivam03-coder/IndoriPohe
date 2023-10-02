import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Layout>
      <Box
        sx={{
          minHeight:"90vh",
          color: "white",
          backgroundColor: "#1c253d",
          py: 14,
          "@media (max-width:600px)": {
            mt: 0,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cinzel, serif;",
            textAlign: "center",
          }}
          variant="h4"
        >
          Welcome To Indori Pohe.
        </Typography>
        <p
          className="paragraphAbout"
          style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "25px",
            color: "cyan",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          Hello Friends this side{" "}
          <span style={{ color: "#e108fc" }}>Shivam Anand</span>.I am currently
          persuing my
          <br />
          <span style={{ color: "#e108fc" }}> Bachelor in Technology</span>
          <br />I am Currently Learning Full Stack{" "}
          <span style={{ color: "#e108fc" }}>Web-Development.</span>
          <br />
          This is my first Ecommerce Website.
          <br />
          Thank You.
        </p>
        <br />
        <p style={{ fontFamily: "sans-serif" }}>
          <h1
            style={{ color: "#ee9313", textAlign: "center", marginTop: "22px" }}
          >
            TRUST ME I AM AN ENGINNER.
          </h1>
        </p>
      </Box>
    </Layout>
  );
}

export default About;
