import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import ProjectBox from "../Projects/ProjectBox";
import FindMeOn from "./FindMeOn";
import IntroOnHome from "./IntroOnHome";
import Type from "./Type";

function Home() {
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Shamimul Haque</title>
        </Helmet>
      </HelmetProvider>

      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHAMIMUL HAQUE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid"
                style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <IntroOnHome />

      {/* added by me  */}


      <Container id="projects">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <ProjectBox />
      </Container>


      <FindMeOn />
    </section>
  );
}

export default Home;
