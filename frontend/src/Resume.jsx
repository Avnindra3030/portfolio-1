function Resume() {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-desc">Download my resume as a PDF below:</p>
      <a
        href="/Resume-Avnindra-Kumar-Singh.pdf"
        download
        className="btn btn-primary resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume; 