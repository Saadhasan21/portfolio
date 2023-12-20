import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import { FaFilePdf } from "react-icons/fa";
import HeroSection from "./HeroSection";

const projects = [
  {
    title: "Equity Research Report - Company A",
    description:
      "In-depth analysis of Company A, including financials, industry comparison, and investment recommendations.",
    reportLink: "https://example.com/reportA.pdf",
  },
  {
    title: "Equity Research Report - Company B",
    description:
      "Comprehensive report on Company B, covering market trends, valuation, and risk factors.",
    reportLink: "https://example.com/reportB.pdf",
  },
  {
    title: "Strategic Investment Analysis - Company C",
    description:
      "Strategic analysis of investment opportunities for Company C, evaluating growth prospects and potential risks.",
    reportLink: "https://example.com/reportC.pdf",
  },
  {
    title: "Sector Analysis - Technology Industry",
    description:
      "In-depth analysis of the technology sector, examining key players, market trends, and future outlook.",
    reportLink: "https://example.com/reportTech.pdf",
  },
  {
    title: "Market Research - Emerging Markets",
    description:
      "Research report on emerging markets, exploring investment opportunities and challenges in dynamic economies.",
    reportLink: "https://example.com/reportEmergingMarkets.pdf",
  },
];

const skills = [
  "Financial Analysis",
  "Equity Research",
  "Valuation",
  "Data Analysis",
  "Financial Modeling",
  "Investment Strategies",
  "Javascript",
  "Node.Js",
  "Express.Js",
  "React",
  "Python",
];

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "IIM - Graduated in 2026",
    year: "Graduated in 2026",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "BMS College of Engineering",
    year: "Graduated in 2021",
  },
];

const workExperience = [
  {
    position: "Software Engineer",
    company: "Valuebound Consulting Services",
    year: "22-dec-2021 to 21-july-2023",
    description: "",
  },
  {
    position: "Software Engineer Trainee",
    company: "Valuebound Consulting Services",
    year: "01-Sept-21 to 21-Dec-21",
    description: "",
  },
];

const achievements = [
  "Passed CAT-2023",
  "Passed AWS Solutions Architect Profession Certification.",
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <Paper
          elevation={3}
          style={{ padding: "20px", marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                About Me
              </Typography>
              <Divider />
              <Typography variant="body1" style={{ marginTop: "10px" }}>
                I am a dedicated professional with a passion for equity research
                , Investement Banking, Private Equity, Hedge fund and financial
                analysis. My goal is to provide valuable insights and strategic
                recommendations for informed decision-making. With a strong
                background in financial modeling and data analysis, I aim to
                contribute to the success of organizations through my expertise
                in the field of finance.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Skills
              </Typography>
              <Divider />
              <Grid container spacing={2} justifyContent="center">
                {skills.map((skill, index) => (
                  <Grid item key={index}>
                    <Chip
                      avatar={<Avatar>{skill.charAt(0)}</Avatar>}
                      label={skill}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Education
              </Typography>
              <Divider />
              {education.map((edu, index) => (
                <Paper
                  elevation={3}
                  style={{ padding: "10px", marginTop: "10px" }}
                  key={index}
                >
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.institution} - {edu.year}
                  </Typography>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Work Experience
              </Typography>
              <Divider />
              {workExperience.map((exp, index) => (
                <Paper
                  elevation={3}
                  style={{ padding: "10px", marginTop: "10px" }}
                  key={index}
                >
                  <Typography variant="h6">{exp.position}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {exp.company} - {exp.year}
                  </Typography>
                  <Typography variant="body1">{exp.description}</Typography>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Achievements
              </Typography>
              <Divider />
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {achievements.map((achievement, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <Typography variant="body1">{achievement}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Featured Projects
              </Typography>
              <Divider />
            </Grid>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper
                  elevation={3}
                  style={{
                    padding: "20px",
                    marginTop: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </div>
                  <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <Button
                      href={project.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<FaFilePdf />}
                      variant="outlined"
                      color="primary"
                    >
                      View Report
                    </Button>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <div style={{ marginBottom: "20px" }}></div>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
