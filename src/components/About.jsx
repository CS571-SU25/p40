import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Section from './Section';
import styles from './About.module.css';

// about component
function About() {
  // array of objects for about me points
  const aboutPoints = [
    {
      id: 1,
      icon: 'assets/animated-icons/graduation.png',
      text: "Hey, I'm Dev! Currently a senior at UW-Madison ('26) majoring in Data Science & Computer Science with a minor in Entrepreneurship.",
      alt: 'Graduation cap icon',
    },
    {
      id: 2,
      icon: 'assets/animated-icons/laptop.png',
      text: 'Building full-stack, data-driven apps is my jam - I have automated pipelines, fine-tuned AI, and I am cooking up a top-secret app!',
      alt: 'Laptop icon',
    },
    {
      id: 3,
      icon: 'assets/animated-icons/work.png',
      text: "Internships have thrown me into everything from automating complex data pipelines to fine-tuning AI models. Basically, if it involves code and strategy, I'm there.",
      alt: 'Work briefcase icon',
    },
    {
      id: 4,
      icon: 'assets/animated-icons/brain.png',
      text: 'Beyond the code, I am obsessed with product management - turning user vibes and smart strategy into the next big thing.',
      alt: 'Brain icon',
    },
    {
      id: 5,
      icon: 'assets/animated-icons/globe.png',
      text: 'Offline, you can catch me gaming, traveling, scuba diving, or hunting for the best food spots (p.s. add me on Beli: @guptadevagya).',
      alt: 'Globe icon',
    },
    {
      id: 6,
      icon: 'assets/animated-icons/car.png',
      text: 'I am the unofficial stadium in my living room - cricket, football, and basketball, before I morph into the race strategist once F1 starts.',
      alt: 'Car icon',
    },
  ];

  return (
    // using section component for the about section with proper heading level
    <Section id="about" title="About Me" headingLevel={2}>
      <Container>
        <Row
          className="align-items-stretch justify-content-center"
          style={{ maxWidth: '1300px' }}
        >
          {/* my image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="assets/me.jpeg"
              alt="Devagya Gupta - Professional headshot"
              className="img-fluid h-100"
              style={{
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            />
          </Col>

          {/* about me points container */}
          <Col md={6}>
            <Card
              bg="dark"
              text="white"
              className="h-100"
              style={{
                backgroundColor: 'hsl(212, 42%, 20%)',
                border: '2px solid #6c757d',
              }}
            >
              <Card.Header>
                <Card.Title as="h3" className="mb-0">
                  Get to Know Me
                </Card.Title>
              </Card.Header>
              <Card.Body className="text-start">
                {/* map through the about me points and display them */}
                {aboutPoints.map((point) => (
                  <div key={point.id} className={styles.aboutItem}>
                    <img
                      src={point.icon}
                      alt={point.alt}
                      className={styles.aboutIcon}
                    />
                    <p className="mb-3">{point.text}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default About;
