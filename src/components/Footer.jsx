import React from 'react';

function Footer() {
  return (
    <div id="contact" className="container-fluid text-bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4">
          <span className="mb-3 mb-md-0 text-white">© 2025 Devagya Gupta</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex align-items-center">
          <li className="me-3">
            <a href="mailto:gupta.devagyav@gmail.com" className="nes-btn is-primary">
              Contact Me!
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/devagyagupta/" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon linkedin is-medium"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://github.com/guptadevagya" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon github is-medium"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;