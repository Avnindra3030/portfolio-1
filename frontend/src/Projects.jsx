import { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Air Pollution Monitoring & Forecasting Platform",
      description: "Built a full-stack platform that predicts next-day AQI using ML models trained on satellite (Sentinel-5P), weather (ERA-5), and ground data (OpenAQ). Developed an interactive map-based dashboard using React.js, Chart.js, and Leaflet.js to visualize real-time and forecasted AQI across Indian cities.",
      tech: ["React.js", "Python (FastAPI)", "XGBoost", "Firebase", "Leaflet.js"],
      liveDemo: "http://air-pollution-tracker.vercel.app",
      github: "https://github.com/Avnindra3030/air-pollution-tracker",
      hasDemo: true
    },
    {
      id: 2,
      title: "BLOODYUNITY – Real-time Blood Donation App",
      description: "Developed a mobile application using Java, Firebase, and Mapbox API to connect blood donors and recipients through real-time location-based matching with emergency support and privacy controls.",
      tech: ["Java", "Firebase", "Mapbox API"],
      hasDemo: false
    }
  ];

  const openDemo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="project-actions">
              {project.hasDemo && (
                <button 
                  className="demo-btn primary"
                  onClick={() => openDemo(project.liveDemo)}
                >
                  🚀 Live Demo
                </button>
              )}
              {project.github && (
                <button 
                  className="demo-btn secondary"
                  onClick={() => openDemo(project.github)}
                >
                  📁 View Code
                </button>
              )}
              {!project.hasDemo && (
                <button 
                  className="demo-btn disabled"
                  disabled
                >
                  📱 Mobile App (Demo Coming Soon)
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 