import SkillBar from './SkillBar';

function Skills() {
  const skillData = {
    languages: [
      { skill: 'Python', percentage: 85, color: '#3776ab' },
      { skill: 'Java', percentage: 80, color: '#f89820' },
      { skill: 'C++', percentage: 75, color: '#00599c' },
      { skill: 'C', percentage: 70, color: '#a8b9cc' }
    ],
    webTech: [
      { skill: 'ReactJS', percentage: 90, color: '#61dafb' },
      { skill: 'JavaScript', percentage: 85, color: '#f7df1e' },
      { skill: 'HTML', percentage: 95, color: '#e34f26' },
      { skill: 'CSS', percentage: 88, color: '#1572b6' }
    ],
    tools: [
      { skill: 'Git', percentage: 85, color: '#f05032' },
      { skill: 'GitHub', percentage: 90, color: '#181717' },
      { skill: 'PyCharm', percentage: 80, color: '#21d789' }
    ],
    coursework: [
      { skill: 'Databases', percentage: 85, color: '#336791' },
      { skill: 'Operating Systems', percentage: 80, color: '#ff6b35' },
      { skill: 'Computer Networks', percentage: 75, color: '#4a90e2' },
      { skill: 'IoT', percentage: 70, color: '#00bcd4' },
      { skill: 'Blockchain', percentage: 65, color: '#f7931e' }
    ]
  };

  return (
    <section className="skills">
      <h2 className="skills-title">Skills & Proficiency</h2>
      
      {/* Animated Skill Bars Section */}
      <div className="skills-bars-section">
        <h3 className="skills-section-title">Programming Languages</h3>
        <div className="skills-bars-grid">
          {skillData.languages.map((skill) => (
            <SkillBar 
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>

        <h3 className="skills-section-title">Web Technologies</h3>
        <div className="skills-bars-grid">
          {skillData.webTech.map((skill) => (
            <SkillBar 
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>

        <h3 className="skills-section-title">Tools & Platforms</h3>
        <div className="skills-bars-grid">
          {skillData.tools.map((skill) => (
            <SkillBar 
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>

        <h3 className="skills-section-title">Coursework & Knowledge</h3>
        <div className="skills-bars-grid">
          {skillData.coursework.map((skill) => (
            <SkillBar 
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Original Skills List (as backup) */}
      <div className="skills-grid">
        <div className="skills-group">
          <h3 className="skills-subtitle">Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Web Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Tools & Platforms</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Pycharm</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Coursework</h3>
          <ul>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Databases</li>
            <li>IoT</li>
            <li>Blockchain Technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills; 