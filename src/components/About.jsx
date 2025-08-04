import Section from './Section'; // import section component
import styles from './About.module.css'; // import css for styling

// about component
function About() {
  // array of objects for about me points
  const aboutPoints = [
    {
      icon: 'assets/animated-icons/graduation.png',
      text: "Hey, I'm Dev! Currently a senior at UW–Madison ('26) majoring in Data Science & Computer Science with a minor in Entrepreneurship.",
    },
    {
      icon: 'assets/animated-icons/laptop.png',
      text: 'Building full‑stack, data‑driven apps is my jam—I’ve automated pipelines, fine‑tuned AI, and I’m cooking up a top‑secret app!',
    },
    {
      icon: 'assets/animated-icons/work.png',
      text: "Internships have thrown me into everything from automating complex data pipelines to fine-tuning AI models. Basically, if it involves code and strategy, I'm there.",
    },
    {
      icon: 'assets/animated-icons/brain.png',
      text: 'Beyond the code, I’m obsessed with product management—turning user vibes and smart strategy into the next big thing.',
    },
    {
      icon: 'assets/animated-icons/globe.png',
      text: 'Offline, you can catch me gaming, traveling, scuba diving, or hunting for the best food spots (p.s. add me on Beli: @guptadevagya).',
    },
    {
      icon: 'assets/animated-icons/car.png',
      text: 'I’m the unofficial stadium in my living room—cricket, football, and basketball, before I morph into the race strategist once F1 starts.',
    },
  ];
  return (
    // using section component for the about section
    <Section id="about" title="About Me">
      <div className="row align-items-stretch" style={{ maxWidth: '1300px' }}>
        {/* my image */}
        <div className="col-md-6 text-center">
          <img
            src="assets/me.jpeg"
            alt="Devagya Gupta"
            className="img-fluid h-100"
            style={{ objectFit: 'contain' }}
          />
        </div>
        {/* about me points container */}
        <div className="col-md-6">
          <div
            className="nes-container is-dark with-title h-80"
            style={{ backgroundColor: 'hsl(212, 42%, 20%)' }}
          >
            <div className="text-white text-start">
              {/* map through the about me points and display them */}
              {aboutPoints.map((point) => (
                <div key={point.id} className={styles.aboutItem}>
                  <img src={point.icon} alt="" className={styles.aboutIcon} />
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
