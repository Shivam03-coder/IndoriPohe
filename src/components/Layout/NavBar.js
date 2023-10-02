import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link } from "react-router-dom";
import "../../styles/NavBar.css";

function NavBar() {
  const [drawer, setDrawer] = useState(false);

  // Drawer
  function handelDrawer() {
    setDrawer(true);
  }

  const menudrawer = (
    <Box
      sx={{
        textAlign: "center",
        "& li:hover": {
          color: "#0074B7",
           transform:"scale(1.2,1.2)",
          transition: "all 400ms",
        },
      }}
    >
      <img
        className="logoImage"
        src="/Images/pngkit_chefs-hat-png_2076698.png"
        alt=""
        srcset=""
        style={{
          marginTop: "23px",
          marginBottom: "23px",
        }}
      />
      <Divider sx={{ color: "black" }} />
      <ul className="MobileNavugationMenu">
        <li>
          <Link to={"/"}>
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
        </li>
        <li>
          <Link to={"/menu"}>
            <i className="bi bi-menu-down"></i> Menu
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <i className="bi bi-file-person-fill"></i> About
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <i className="bi bi-person-lines-fill"></i> Contact
          </Link>
        </li>
      </ul>
      <div className="backDrawer" style={{ marginTop: "67px" }}>
        <CloseIcon
          onClick={() => {
            setDrawer(false);
          }}
          style={{
            color: "red",
            cursor: "pointer",
            fontSize: "34px",
          }}
        ></CloseIcon>
      </div>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#186F65" }}>
          <Toolbar>
            <img
              className="logoImage"
              src="/Images/pngkit_chefs-hat-png_2076698.png"
              alt=""
              srcset=""
            />
            <Typography
              component="div"
              variant="h5"
              sx={{
                marginLeft: { xs: "5%", sm: "1%" },
                // color: "#001524",
                color:"#FFB000",
                fontFamily: "Tilt Prism",
                flexGrow: "1",
                fontWeight: "900",
                fontSize: "34px",
              }}
            >
              INDORI POHE
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                "& li:hover": {
                  color: "#0074B7",
                  transform: "scale(1.1)",
                  transition: "all 400ms",
                },
              }}
            >
              <ul className="NavigationUl">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    <i className="bi bi-house-door-fill"></i> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>
                    <i className="bi bi-menu-down"></i> Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>
                    <i className="bi bi-file-person-fill"></i> About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>
                    <i className="bi bi-person-lines-fill"></i> Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open"
              edge="start"
              onClick={handelDrawer}
              sx={{
                margin: "0px,5px",
                color: "black",
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                backgroundColor: "#186F65",
              },
            }}
            variant="temporary"
            open={drawer}
            onClose={handelDrawer}
          >
            {menudrawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}

export default NavBar;
