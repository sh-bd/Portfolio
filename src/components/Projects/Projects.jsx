import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Particle from "../Particle";
import ProjectBox from "./ProjectBox";

function Projects() {
  return (
    <Container fluid className="project-section">
    <HelmetProvider>
      <Helmet>
        <title>Projects - Shamimul Haque</title>
      </Helmet>
    </HelmetProvider>

    
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <ProjectBox />
      </Container>
    </Container>
  );
}

export default Projects;
