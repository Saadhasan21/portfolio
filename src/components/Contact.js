import React from "react";
import {
  Typography,
  Link,
  Paper,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission or handling contact requests
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1">
          Feel free to reach out to me via email at{" "}
          <Link href="mailto:your.saadhasan56@gmail.com" color="primary">
            saadhasan56@gmail.com
          </Link>
          . I'm open to discussing potential collaboration or answering any
          inquiries you may have.
        </Typography>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Your Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                id="message"
                label="Your Message"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
