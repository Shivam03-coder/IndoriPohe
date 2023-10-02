import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: "90vh",
          color: "white",
          backgroundColor: "#1c253d",
          py: 12,
          pl: 10,
          pr: 10,
          "@media (max-width:600px)": {
            mt: 0,
          },
        }}
      >
        <Typography
          sx={{
            color: "#0583ff",
            fontFamily: " Rampart One, cursive",
            textAlign: "center",
          }}
          variant="h2"
        >
          Contact{" "}
          <span
            style={{
              color: "#ff8c04",
              fontFamily: " Rampart One, cursive",
              textAlign: "center",
            }}
          >
            {" "}
            INDORI POHE.
          </span>
        </Typography>
        <p
          style={{
            textAlign: "justify",
            marginTop: "28px",
            fontSize: "23px",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          This place is great! Atmosphere is chill and cool but the staff is
          also really friendly. They know what they’re doing and what they’re
          talking about, and you can tell making the customers happy is their
          main priority. Food is pretty good, some italian classics and some
          twists, and for their prices it’s 100% worth it. Besides the obvious
          cleaning tasks like wiping down tables and disinfecting counters which
          you should do multiple times a day, pay attention to details if you
          truly want to woo customers.
        </p>
      </Box>
    </Layout>
  );
}

export default Contact;
