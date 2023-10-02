import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#101224",
          padding: "2px",
          color: "black",
          fontFamily: "monospace",
        }}
      >
        <Box
          sx={{
            mt: 2,
            mb: 1,
            // backgroundColor:"#101224",
            display: "flex",
            gap: "3%",
            justifyContent: "center",
            "& a:hover": {
              color: "#0000FF",
              transform: "scale(1.3,1.3)",
              transition: "all 400ms",
            },
          }}
        >
          <a href="https://twitter.com/ShivamA02580516" className="href">
            <i
              className="bi bi-twitter"
              style={{ color: "#0000FF", fontSize: "32px" }}
            ></i>
          </a>
          <a href="https://m.facebook.com/" className="href">
            <i
              className="bi bi-facebook"
              style={{ color: "#0E86D4", fontSize: "32px" }}
            ></i>
          </a>
          <a href="https://github.com/Shivam03-coder" className="href">
            <i
              className="bi bi-github"
              style={{ color: "#ee9313", fontSize: "32px" }}
            ></i>
          </a>
          <a
            href="https://instagram.com/_shivam_anand__?igshid=YTQwZjQ0NmI0OA=="
            className="href"
          >
            <i
              className="bi bi-instagram"
              style={{ color: "#FA26A0", fontSize: "32px" }}
            ></i>
          </a>
          <a href="https://wa.me/qr/SG7QT5N755Q6M1" className="href">
            <i
              className="bi bi-whatsapp"
              style={{ color: "#18ed09", fontSize: "32px" }}
            ></i>
          </a>
        </Box>
        <Divider sx={{ color: "black" }} />
        <Typography sx={{ mb: 1, mt: 1, color: "cyan" }} variant="h5">
          All Rights are reserved &copy; Indori-Pohe.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
