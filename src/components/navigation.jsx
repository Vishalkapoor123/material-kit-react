import React from "react";

import { AppBar, Button, Toolbar, Container } from '@mui/material';

export const Navigation = () => (
  <AppBar id="menu" position="fixed">
    <Container>
      <Toolbar>
        <Button href="#page-top" color="inherit" underline="none">
          React Landing Page
        </Button>
        <div style={{ flexGrow: 1 }} />
        <Button href="#features" color="inherit" underline="none">
          Features
        </Button>
        <Button href="#about" color="inherit" underline="none">
          About
        </Button>
        <Button href="#services" color="inherit" underline="none">
          Services
        </Button>
        <Button href="#portfolio" color="inherit" underline="none">
          Gallery
        </Button>
        <Button href="#testimonials" color="inherit" underline="none">
          Testimonials
        </Button>
        <Button href="#team" color="inherit" underline="none">
          Team
        </Button>
        <Button href="#contact" color="inherit" underline="none">
          Contact
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);
