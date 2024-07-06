import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "./Contact";
import Blog from "./Blog";
import Team from "./Team";
import Gallery from "./Gallery";
import Services from "./Services";
import { Element } from 'react-scroll'; // Import Element from react-scroll

function App() {
  return (
    <Box sx={{ bgcolor: '#000000' }}>
      <Container maxWidth={false} disableGutters sx={{ width: { xs: "100%", sm: "94%" } }}>
        <Navbar />
        <Hero />
        <Element name="services">
          <Services />
        </Element>
        <Element name="gallery">
          <Gallery />
        </Element>
        <Element name="team">
          <Team />
        </Element>
        <Element name="blog">
          <Blog />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
