import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import A from "../../Assets/Projects/Coming_Soon.png";
import B from "../../Assets/Projects/Coming_Soon.png";
import C from "../../Assets/Projects/Coming_Soon.png";
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
              imgPath={A}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={B}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={C}
              isBlog={false}
              title="x"
              description="xx"
              ghLink="x"
              demoLink="x"             
            />
          </Col>

          <Col md={4} className="project-card">
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
