// src/components/About.js
import React from "react";
import { Typography, Paper, Divider } from "@mui/material";

const About = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am a seasoned finance professional with a deep understanding of equity
        research and financial analysis. My expertise includes analyzing
        financial statements, assessing market trends, and providing investment
        recommendations. Throughout my career, I have authored comprehensive
        equity research reports for various companies.
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1">
        - Financial Analysis
        <br />
        - Equity Research
        <br />
        - Valuation
        <br />
        - Financial Modeling
        <br />- Investment Strategies
        <br />
        - Data Analysis
        <br />
        - Javascript
        <br />
        - Node.Js
        <br />
        - Express.Js
        <br />
        - React
        <br />- AWS
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <Paper elevation={3} style={{ padding: "10px", margin: "10px 0" }}>
        <Typography variant="h6">
          Master of Business Administration (MBA)
        </Typography>
        <Typography variant="body2" color="textSecondary">
          IIM - Graduated in 2026
        </Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "10px", margin: "10px 0" }}>
        <Typography variant="h6">Bachelor of Engineering</Typography>
        <Typography variant="body2" color="textSecondary">
          BMS College of Engineering - Graduated in 2021
        </Typography>
      </Paper>
    </div>
  );
};

export default About;
