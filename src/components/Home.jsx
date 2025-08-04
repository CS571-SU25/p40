import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Section from './Section';

// home component
function Home() {
  return (
    // using section component for the home section with h1 for main heading
    <Section id="home" headingLevel={1}>
      <Container>
        <Row className="justify-content-center">
          <Col xl="auto" className="text-center">
            {/* main heading - h1 for SEO and accessibility */}
            <h1 className="display-3 fw-bold text-white mb-3">Devagya Gupta</h1>
            <h2 className="h3 fw-normal text-warning mb-3">
              Computer Science, Data Science & Entrepreneurship
            </h2>
            <h3 className="h4 fw-normal text-warning mb-4">
              University of Wisconsin - Madison '26
            </h3>

            {/* social media links with proper accessibility */}
            <Container className="d-flex justify-content-center mb-4">
              <Button
                variant="outline-danger"
                className="mx-3"
                href="https://www.linkedin.com/in/devagyagupta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Devagya's LinkedIn profile (opens in new tab)"
              >
                <i
                  className="nes-icon linkedin is-medium"
                  aria-hidden="true"
                ></i>
                <span className="visually-hidden">LinkedIn</span>
              </Button>
              <Button
                variant="outline-success"
                className="mx-3"
                href="https://github.com/guptadevagya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Devagya's GitHub profile (opens in new tab)"
              >
                <i className="nes-icon github is-medium" aria-hidden="true"></i>
                <span className="visually-hidden">GitHub</span>
              </Button>
            </Container>

            {/* resume button */}
            <Button
              variant="warning"
              size="lg"
              href="assets/Devagya_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Devagya's resume (PDF, opens in new tab)"
            >
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Home;
