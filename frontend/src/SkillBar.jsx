import React, { useState, useEffect, useRef } from 'react';
import './SkillBar.css';

const SkillBar = ({ skill, percentage, color = '#2563eb' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the percentage
          const duration = 1500; // 1.5 seconds
          const steps = 60;
          const increment = percentage / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= percentage) {
              current = percentage;
              clearInterval(timer);
            }
            setAnimatedPercentage(Math.round(current));
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="skill-bar-container" ref={barRef}>
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{animatedPercentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            backgroundColor: color 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar; 