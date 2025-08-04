import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Section from './Section';

// contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // For demo purposes, just show an alert
    // In a real application, you would send this data to a server
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setValidated(false);

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Section id="contact-form" title="Get In Touch" headingLevel={2}>
      <Container style={{ maxWidth: '800px' }}>
        {showAlert && (
          <Alert
            variant="success"
            className="mb-4"
            role="alert"
            aria-live="polite"
          >
            <Alert.Heading>Thank you for your message!</Alert.Heading>
            <p>I'll get back to you as soon as possible.</p>
          </Alert>
        )}

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="bg-dark p-4 rounded"
          style={{
            backgroundColor: 'hsl(212, 42%, 20%) !important',
            border: '2px solid #6c757d',
          }}
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contact-name" className="text-white">
                  Name *
                </Form.Label>
                <Form.Control
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-describedby="name-feedback"
                  className="bg-secondary text-white border-light"
                  style={{
                    backgroundColor: '#495057 !important',
                    borderColor: '#6c757d !important',
                    color: 'white !important',
                  }}
                />
                <Form.Control.Feedback
                  type="invalid"
                  id="name-feedback"
                  role="alert"
                >
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="contact-email" className="text-white">
                  Email *
                </Form.Label>
                <Form.Control
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-describedby="email-feedback"
                  className="bg-secondary text-white border-light"
                  style={{
                    backgroundColor: '#495057 !important',
                    borderColor: '#6c757d !important',
                    color: 'white !important',
                  }}
                />
                <Form.Control.Feedback
                  type="invalid"
                  id="email-feedback"
                  role="alert"
                >
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contact-subject" className="text-white">
              Subject *
            </Form.Label>
            <Form.Control
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-describedby="subject-feedback"
              className="bg-secondary text-white border-light"
              style={{
                backgroundColor: '#495057 !important',
                borderColor: '#6c757d !important',
                color: 'white !important',
              }}
            />
            <Form.Control.Feedback
              type="invalid"
              id="subject-feedback"
              role="alert"
            >
              Please provide a subject.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label htmlFor="contact-message" className="text-white">
              Message *
            </Form.Label>
            <Form.Control
              id="contact-message"
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-describedby="message-feedback"
              className="bg-secondary text-white border-light"
              style={{
                backgroundColor: '#495057 !important',
                borderColor: '#6c757d !important',
                color: 'white !important',
              }}
            />
            <Form.Control.Feedback
              type="invalid"
              id="message-feedback"
              role="alert"
            >
              Please provide a message.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button
              variant="warning"
              type="submit"
              size="lg"
              aria-describedby="submit-help"
            >
              Send Message
            </Button>
            <Form.Text id="submit-help" className="text-muted d-block mt-2">
              All fields marked with * are required.
            </Form.Text>
          </div>
        </Form>
      </Container>
    </Section>
  );
}

export default ContactForm;
