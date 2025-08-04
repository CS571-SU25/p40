import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Fun from './components/FunStuff';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

// main app component
function App() {
  return (
    <div>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Fun />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
