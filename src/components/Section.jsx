function Section({ id, title, children }) {
  // home section does not get the 'content-section' class
  const sectionClass = id === 'home' ? 'section' : 'section content-section';

  return (
    <section id={id} className={sectionClass}>
      {title && <h3 className="text-center text-white my-5">{title}</h3>}
      <div className={id === 'home' ? 'w-100' : 'section-content'}>
        {children}
      </div>
    </section>
  );
}

export default Section;
