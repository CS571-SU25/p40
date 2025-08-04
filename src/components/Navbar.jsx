import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

// navbar component
function Navbar() {
  return (
    <BSNavbar
      expand="lg"
      variant="dark"
      bg="dark"
      fixed="top"
      aria-label="Main navigation"
    >
      <Container fluid>
        {/* home icon */}
        <BSNavbar.Brand href="#home" aria-label="Devagya Gupta - Home">
          <img
            src="assets/dev.png"
            alt="Devagya Gupta's logo"
            style={{ height: '40px' }}
          />
        </BSNavbar.Brand>

        {/* hamburger menu for mobile */}
        <BSNavbar.Toggle
          aria-controls="main-navbar-nav"
          aria-label="Toggle navigation menu"
        />

        {/* nav links */}
        <BSNavbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#about"
              className={styles.navLink}
              aria-label="Navigate to About Me section"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={styles.navLink}
              aria-label="Navigate to Skills section"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={styles.navLink}
              aria-label="Navigate to Projects section"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#fun"
              className={styles.navLink}
              aria-label="Navigate to Fun section"
            >
              Fun
            </Nav.Link>
            <Nav.Link
              href="#contact-form"
              className={styles.navLink}
              aria-label="Navigate to Contact Form section"
            >
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
