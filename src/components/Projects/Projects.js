import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bankist from "../../Assets/Projects/bankist_back.png";
import personal_site from "../../Assets/Projects/personal_site.png";
import online_drum from "../../Assets/Projects/drum_play.png";
import D from "../../Assets/Projects/Coming_Soon.png";
import E from "../../Assets/Projects/Coming_Soon.png";
import F from "../../Assets/Projects/Coming_Soon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankist}
              isBlog={false}
              title="Bankist App"
              description="USER: ar, ss, us PIN: 1111, 2222, 3333 respectively. Take a look at the demo below."
              ghLink="https://github.com/itsrajadarsh/Bankist"
              demoLink="https://bankist-adarsh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal_site}
              isBlog={false}
              title="Simple Portfolio"
              description="Personal Website made with HTML and CSS only."
              ghLink="https://github.com/itsrajadarsh/mySite"
              demoLink="https://html-site-adarsh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_drum}
              isBlog={false}
              title="Play Drum Online"
              description="simple drum-kit, play with keyboard or mouse and enjoy the music!"
              ghLink="https://github.com/itsrajadarsh/drumKit"
              demoLink="https://drum-kit-adarsh.vercel.app/"             
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={D}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={F}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
