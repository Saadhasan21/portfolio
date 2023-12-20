// src/components/HeroSection.js
import React from "react";
import { Parallax } from "react-parallax";
import { Container, Typography } from "@mui/material";
import image from "../assets/images/pic.jpg";

const HeroSection = () => {
  return (
    <Parallax bgImage={image} strength={500}>
      <Container>
        <div style={{ height: "500px" }}>
          <Typography
            variant="h4"
            align="center"
            style={{ paddingTop: "200px", color: "#fff" }}
          >
            Saad Hasan's Portfolio
          </Typography>
          <Typography variant="h6" align="center" style={{ color: "#fff" }}>
            Welcome to my professional portfolio. Explore my expertise in equity
            research and financial analysis.
          </Typography>
        </div>
      </Container>
    </Parallax>
  );
};

export default HeroSection;
