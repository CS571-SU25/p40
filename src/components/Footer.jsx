import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// footer component
function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* copyright info */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span>© 2025 Devagya Gupta</span>
          </Col>

          {/* contact and social media links */}
          <Col md={6}>
            <Row className="justify-content-center justify-content-md-end align-items-center">
              <Col xs="auto" className="mb-2 mb-sm-0">
                <Button
                  variant="primary"
                  href="mailto:gupta.devagyav@gmail.com"
                  aria-label="Send email to Devagya Gupta"
                >
                  Contact Me!
                </Button>
              </Col>
              <Col xs="auto">
                <div className="d-flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/devagyagupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    aria-label="Visit Devagya's LinkedIn profile (opens in new tab)"
                    style={{ fontSize: '1.5rem' }}
                  >
                    <i
                      className="nes-icon linkedin is-medium"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    href="https://github.com/guptadevagya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    aria-label="Visit Devagya's GitHub profile (opens in new tab)"
                    style={{ fontSize: '1.5rem' }}
                  >
                    <i
                      className="nes-icon github is-medium"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
