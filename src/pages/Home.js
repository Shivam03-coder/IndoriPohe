import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import backImages from "../Images/poha-recipe-1920x1080.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${backImages})` }}>
        <div className="headerContainer">
          <h1>INDORI POHE</h1>
          <p>BEST FOOD IN INDORE AND INDIA.</p>
          <Link to="/menu">
            <Button
              sx={{
                marginTop: "27px",
                cursor: "pointer",
                backgroundColor: "EE9322",
              }}
              variant="contained"
              color="secondary"
            >
              ORDER NOW
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
