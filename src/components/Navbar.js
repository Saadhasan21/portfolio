// src/components/Navbar.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  background: "#2E3B4E", // Adjust the background color
  boxShadow: "none", // Remove the box shadow
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textDecoration: "none", // Remove underline from link
  color: "#fff", // Set text color to white
});

const StyledButton = styled(Button)({
  marginLeft: "8px", // Add space between buttons
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6" component={RouterLink} to="/">
          Saad Hasan
        </StyledTypography>
        <StyledButton component={RouterLink} to="/" color="inherit">
          Home
        </StyledButton>
        <StyledButton component={RouterLink} to="/about" color="inherit">
          About
        </StyledButton>
        <StyledButton component={RouterLink} to="/contact" color="inherit">
          Contact
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
