function Skills() {
  const languages = [
    { name: 'Python', icon: '/assets/skills-icons/python.png' },
    { name: 'Java', icon: '/assets/skills-icons/java.png' },
    { name: 'C', icon: '/assets/skills-icons/c.png' },
    { name: 'C++', icon: '/assets/skills-icons/c-plus-plus.png' },
    { name: 'Kotlin', icon: '/assets/skills-icons/kotlin.png' },
    { name: 'Go', icon: '/assets/skills-icons/golang.png' },
  ];

  const frontend = [
    { name: 'HTML', icon: '/assets/skills-icons/html.png' },
    { name: 'CSS', icon: '/assets/skills-icons/css.png' },
    { name: 'Javascript', icon: '/assets/skills-icons/javascript.png' },
    { name: 'React', icon: '/assets/skills-icons/react.png' },
    { name: 'Bootstrap', icon: '/assets/skills-icons/bootstrap.png' },
    { name: 'SwiftUI', icon: '/assets/skills-icons/swiftui.png' },
  ];

  const backend = [
    { name: 'Node', icon: '/assets/skills-icons/node.png' },
    { name: 'MySQL', icon: '/assets/skills-icons/mysql.png' },
    { name: 'MongoDB', icon: '/assets/skills-icons/mongodb.png' },
    { name: 'Firebase', icon: '/assets/skills-icons/firebase.png' },
    { name: 'PyTorch', icon: '/assets/skills-icons/pytorch.png' },
  ];

  const productivity = [
    { name: 'Git', icon: '/assets/skills-icons/git.png' },
    { name: 'Docker', icon: '/assets/skills-icons/docker.png' },
    { name: 'VS Code', icon: '/assets/skills-icons/vscode.png' },
    { name: 'LaTeX', icon: '/assets/skills-icons/latex.png' },
    { name: 'Figma', icon: '/assets/skills-icons/figma.png' },
    { name: 'Canva', icon: '/assets/skills-icons/canva.png' },
  ];

  const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '1.3rem', // increased font size
  };

  const iconStyle = {
    marginRight: '1rem',
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  };

  const skillCategories = [
    { title: 'Languages', skills: languages },
    { title: 'Front-end', skills: frontend },
    { title: 'Back-end', skills: backend },
    { title: 'Productivity', skills: productivity },
  ];

  return (
    <section
      id="skills"
      className="container text-center"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h3 className="text-center text-white my-5">Skills</h3>

      <div className="container" style={{ maxWidth: '1050px' }}>
        <div className="row justify-content-center">
          {skillCategories.map((category) => (
            <div key={category.title} className="col-lg-5 col-md-6 mb-5">
              <div
                className="nes-container is-dark with-title h-100 d-flex flex-column align-items-center"
                style={{
                  backgroundColor: 'hsl(212, 42%, 20%)',
                }}
              >
                <p
                  className="title text-center"
                  style={{
                    fontSize: '1.3rem',
                    color: 'hsl(195, 75%, 52%)',
                    backgroundColor: 'hsl(212, 42%, 20%)',
                  }}
                >
                  {category.title}
                </p>
                <ul
                  className="nes-list text-center"
                  style={{ listStyleType: 'none', padding: 0 }}
                >
                  {category.skills.map((skill) => (
                    <li key={skill.name} style={skillItemStyle}>
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        style={iconStyle}
                      />
                      <span className="text-white">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
