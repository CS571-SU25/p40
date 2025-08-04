import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Section from './Section';

// skills component
function Skills() {
  // array of objects for languages
  const languages = [
    { name: 'Python', icon: 'assets/skills-icons/python.png' },
    { name: 'Java', icon: 'assets/skills-icons/java.png' },
    { name: 'C', icon: 'assets/skills-icons/c.png' },
    { name: 'C++', icon: 'assets/skills-icons/c-plus-plus.png' },
    { name: 'Kotlin', icon: 'assets/skills-icons/kotlin.png' },
    { name: 'Go', icon: 'assets/skills-icons/golang.png' },
  ];

  // array of objects for front-end skills
  const frontend = [
    { name: 'HTML', icon: 'assets/skills-icons/html.png' },
    { name: 'CSS', icon: 'assets/skills-icons/css.png' },
    { name: 'Javascript', icon: 'assets/skills-icons/javascript.png' },
    { name: 'React', icon: 'assets/skills-icons/react.png' },
    { name: 'Bootstrap', icon: 'assets/skills-icons/bootstrap.png' },
    { name: 'SwiftUI', icon: 'assets/skills-icons/swiftui.png' },
  ];

  // array of objects for back-end skills
  const backend = [
    { name: 'Node', icon: 'assets/skills-icons/node.png' },
    { name: 'MySQL', icon: 'assets/skills-icons/mysql.png' },
    { name: 'MongoDB', icon: 'assets/skills-icons/mongodb.png' },
    { name: 'Firebase', icon: 'assets/skills-icons/firebase.png' },
    { name: 'PyTorch', icon: 'assets/skills-icons/pytorch.png' },
  ];

  // array of objects for productivity skills
  const productivity = [
    { name: 'Git', icon: 'assets/skills-icons/git.png' },
    { name: 'Docker', icon: 'assets/skills-icons/docker.png' },
    { name: 'VS Code', icon: 'assets/skills-icons/vscode.png' },
    { name: 'LaTeX', icon: 'assets/skills-icons/latex.png' },
    { name: 'Figma', icon: 'assets/skills-icons/figma.png' },
    { name: 'Canva', icon: 'assets/skills-icons/canva.png' },
  ];

  // array of objects for skill categories
  const skillCategories = [
    { title: 'Languages', skills: languages },
    { title: 'Front-end', skills: frontend },
    { title: 'Back-end', skills: backend },
    { title: 'Productivity', skills: productivity },
  ];

  return (
    <Section id="skills" title="Skills" headingLevel={2}>
      <Container style={{ maxWidth: '1050px' }}>
        <Row className="justify-content-center">
          {/* map through the skill categories and display them */}
          {skillCategories.map((category) => (
            <Col key={category.title} lg={6} md={6} className="mb-4">
              <Card
                bg="dark"
                text="white"
                className="h-100"
                style={{
                  backgroundColor: 'hsl(212, 42%, 20%)',
                  border: '2px solid #6c757d',
                }}
              >
                <Card.Header className="text-center">
                  <Card.Title
                    as="h3"
                    className="mb-0"
                    style={{
                      fontSize: '1.3rem',
                      color: 'hsl(195, 75%, 52%)',
                    }}
                  >
                    {category.title}
                  </Card.Title>
                </Card.Header>
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    {/* map through the skills and display them */}
                    {category.skills.map((skill) => (
                      <ListGroup.Item
                        key={skill.name}
                        className="d-flex align-items-center bg-transparent text-white border-secondary"
                        style={{
                          fontSize: '1.1rem',
                          padding: '0.75rem 1rem',
                        }}
                      >
                        <img
                          src={skill.icon}
                          alt={`${skill.name} technology logo`}
                          style={{
                            marginRight: '1rem',
                            width: '24px',
                            height: '24px',
                            objectFit: 'contain',
                          }}
                        />
                        <span>{skill.name}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default Skills;
