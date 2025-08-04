import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Section from './Section';

// projects component
function Projects() {
  // array of objects for project data
  const projectData = [
    {
      id: 1,
      name: 'open-lambda',
      description:
        'Giving your code main character energy by letting it run instantly without any backend baggage.',
      image: 'assets/projects/lambda.png',
      githubLink: 'https://github.com/open-lambda/open-lambda',
    },
    {
      id: 2,
      name: 'weather-data-service',
      description:
        'My take on a fault-tolerant weather service. It is fast, scalable, and built with a smarter data schema so it never quits.',
      image: 'assets/projects/weather.png',
      githubLink: 'https://github.com/guptadevagya/weather-data-service',
    },
    {
      id: 3,
      name: 'waffle-game',
      description:
        'An addicting, waffle-shaped word puzzle. Unscramble six intersecting words before you run out of swaps.',
      image: 'assets/projects/waffle.png',
      githubLink: 'https://github.com/guptadevagya/waffle-game',
    },
  ];

  return (
    <Section id="projects" title="Projects" headingLevel={2}>
      <Container style={{ maxWidth: '1200px' }}>
        <Row className="justify-content-center">
          {/* map through the project data and display them */}
          {projectData.map((project) => (
            <Col key={project.id} lg={6} md={6} className="mb-4">
              <Card
                className="h-100 bg-dark text-white"
                style={{
                  backgroundColor: 'hsl(212, 42%, 20%)',
                  border: '2px solid #6c757d',
                  transition: 'transform 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-warning">
                    {project.name}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                    aria-label={`View ${project.name} project on GitHub (opens in new tab)`}
                  >
                    <i
                      className="nes-icon github is-small me-2"
                      aria-hidden="true"
                    ></i>
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default Projects;
