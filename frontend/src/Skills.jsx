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
      { skill: 'CSS', percentage: 88, color: '#1572b6' },
      { skill: 'Node.js', percentage: 80, color: '#339933' },
      { skill: 'Express.js', percentage: 75, color: '#000000' },
      { skill: 'MongoDB', percentage: 75, color: '#47a248' }
    ],
    tools: [
      { skill: 'Git', percentage: 85, color: '#f05032' },
      { skill: 'GitHub', percentage: 90, color: '#181717' },
      { skill: 'VSCode', percentage: 85, color: '#007acc' },
      { skill: 'PyCharm', percentage: 80, color: '#21d789' }
    ],
    concepts: [
      { skill: 'Data Structures & Algorithms', percentage: 85, color: '#ff6b35' },
      { skill: 'OOP', percentage: 80, color: '#4a90e2' },
      { skill: 'REST APIs', percentage: 80, color: '#00bcd4' },
      { skill: 'Agile Methodologies', percentage: 75, color: '#f7931e' },
      { skill: 'Operating Systems', percentage: 80, color: '#ff6b35' },
      { skill: 'DBMS', percentage: 85, color: '#336791' },
      { skill: 'Computer Networks', percentage: 75, color: '#4a90e2' }
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

        <h3 className="skills-section-title">Concepts & Knowledge</h3>
        <div className="skills-bars-grid">
          {skillData.concepts.map((skill) => (
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
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Tools & Platforms</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VSCode</li>
            <li>PyCharm</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Concepts</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>OOP</li>
            <li>REST APIs</li>
            <li>Agile Methodologies</li>
            <li>Operating Systems</li>
            <li>DBMS</li>
            <li>Computer Networks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills; 