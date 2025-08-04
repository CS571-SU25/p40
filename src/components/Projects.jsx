import React from 'react';
import Section from './Section';
import styles from './Projects.module.css';

function Projects() {
  const projectData = [
    {
      name: 'open-lambda',
      description:
        'giving your code main character energy by letting it run instantly without any backend baggage.',
      image: '/assets/projects/lambda.png',
      githubLink: 'https://github.com/open-lambda/open-lambda',
    },
    {
      name: 'weather-data-service',
      description:
        'my take on a fault-tolerant weather service. it’s fast, scalable, and built with a smarter data schema so it never quits.',
      image: '/assets/projects/weather.png',
      githubLink: 'https://github.com/guptadevagya/weather-data-service',
    },
    {
      name: 'waffle-game',
      description:
        'an addicting, waffle-shaped word puzzle. unscramble six intersecting words before you run out of swaps.',
      image: '/assets/projects/waffle.png',
      githubLink: 'https://github.com/guptadevagya/waffle-game',
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row justify-content-center">
          {projectData.map((project, index) => (
            // change col-lg-6 to col-lg-5 to make the cards smaller
            <div key={index} className="col-lg-5 mb-5">
              <div className={styles.card__article}>
                <div className={styles.card__image}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={styles.card__img}
                  />
                  <a
                    href={project.githubLink}
                    className={styles.githubIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="nes-icon github is-medium"></i>
                  </a>
                  <div className={styles.card__shadow}></div>
                </div>
                <div className={styles.card__data}>
                  <h3 className={styles.card__name}>{project.name}</h3>
                  <p className={styles.card__description}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
