import React from 'react';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="/assets/dev.png" alt="home icon" style={{ height: '40px' }} />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#fun">Fun</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;