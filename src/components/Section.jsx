import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

// section component with proper heading hierarchy
function Section({ id, title, children, headingLevel = 2 }) {
  // home section does not get the 'content-section' class
  const sectionClass = id === 'home' ? 'section' : 'section content-section';

  // Dynamic heading component based on level
  const HeadingComponent = `h${headingLevel}`;

  return (
    <section
      id={id}
      className={sectionClass}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      {/* only show title if it exists with proper heading level */}
      {title && (
        <HeadingComponent
          id={`${id}-heading`}
          className="text-center text-white my-5"
          style={{ fontSize: headingLevel === 1 ? '2.5rem' : '2rem' }}
        >
          {title}
        </HeadingComponent>
      )}
      {/* Container for better responsive design */}
      <Container
        fluid={id === 'home'}
        className={id === 'home' ? 'w-100' : 'section-content'}
      >
        {children}
      </Container>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Section;
