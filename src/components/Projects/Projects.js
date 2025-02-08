import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import opinyo from "../../Assets/Projects/Opinyo.png";
import orderease from "../../Assets/Projects/OrderEase.png";
import cph from "../../Assets/Projects/CPH.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderease}
              isBlog={false}
              title="OrderEase"
              description="A full-stack application enabling customers to browse menus and place orders easily while allowing restaurant staff to manage orders in real-time. Built for a seamless dining experience, it includes search, cart, and feedback features."
              ghLink="https://github.com/soni-prakhar07/DigitalMenu.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opinyo}
              isBlog={false}
              title="Opinyo"
              description="A customer feedback system that allows users to submit and view personalized feedback on products, with session-based authentication ensuring secure and unique user experiences. The system is optimized for easy deployment and management, providing insightful feedback tracking for businesses.  "
              ghLink="https://github.com/soni-prakhar07/Opinyo.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cph}
              isBlog={false}
              title="CPH VScode Extension"
              description="A VScode extension that allows users to easily fetch the test cases of a problem from Leetcode and run them on their local machine. The extension also provides multiple lanugage support such as C++, Python and Javascript."
              ghLink="https://github.com/soni-prakhar07/CPH.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
