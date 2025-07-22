import Section from './Section';

function Home() {
  return (
    <Section id="home">
      <div className="col-xl-auto mx-auto text-center">
        <h1 className="display-3 fw-bold text-white">Devagya Gupta</h1>
        <h3 className="fw-normal text-warning mb-3">Computer Science, Data Science & Entrepreneurship</h3>
        <h4 className="fw-normal text-warning mb-3">University of Wisconsin - Madison '26</h4>
        <div className='container d-flex justify-content-center mb-4'>
          <a className="nes-btn is-error mx-3" href="https://www.linkedin.com/in/devagyagupta/" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon linkedin is-medium"></i>
          </a>
          <a className="nes-btn is-success mx-3" href="https://github.com/guptadevagya" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon github is-medium"></i>
          </a>
        </div>
        <a className="nes-btn is-warning" href="/assets/Devagya_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </Section>
  );
}

export default Home;