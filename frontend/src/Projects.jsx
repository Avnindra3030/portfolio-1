function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">
        <div className="project-minicard">
          <h3 className="project-title">BLOODYUNITY – Real-time Blood Donation App</h3>
          <p className="project-desc">
            Developed a mobile application using Java, Firebase, and Map box API to connect blood donors and recipients through real-time location-based matching with emergency support and privacy controls.
          </p>
        </div>
        <div className="project-minicard">
          <h3 className="project-title">Portfolio Builder – SaaS-Based Portfolio Creation Platform</h3>
          <p className="project-desc">
            Developed a dynamic portfolio builder using React and MERN stack with user authentication, real-time preview, customizable templates, and CRUD operations for portfolio sections with PDF/URL.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects; 