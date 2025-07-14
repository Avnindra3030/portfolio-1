function Home() {
  return (
    <section className="hero">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="Profile"
        className="hero-img"
      />
      <h1 className="hero-title">Avnindra Kumar Singh</h1>
      <h2 className="hero-subtitle">Full Stack Developer</h2>
      <p className="hero-tagline">
        Building scalable web solutions. Passionate about solving real-world problems with code.
      </p>
      <div className="hero-actions">
        <a
          href="#contact"
          className="btn btn-primary"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="btn btn-outline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home; 