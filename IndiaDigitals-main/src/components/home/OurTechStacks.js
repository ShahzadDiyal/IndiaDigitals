import React from 'react';
import './TechStacks.css'; // Assume you'll put the CSS styles here

// Dummy data for the frontend technologies (replace with your actual data)
const frontendTechs = [
  { name: 'React', icon: '⚛️' }, // Replace string with actual imported Icon component or SVG
  { name: 'Vue.js', icon: 'V' },
  { name: 'Next.js', icon: 'N' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'HTML5', icon: '5' },
  { name: 'CSS3', icon: '3' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'Bootstrap', icon: 'B' },
  { name: 'Sass', icon: 'S' },
  { name: 'Angular', icon: 'A' },
  { name: 'jQuery', icon: 'jQ' },
  { name: 'Gatsby', icon: 'G' },
  { name: 'Ember.js', icon: 'E' },
];

const TechStacks = () => {
  return (
    <section className="tech-stacks-section">
      <div className="container">
        {/* Main Heading */}
        <h2 className="main-heading">Our Tech Stacks</h2>

        {/* Frontend Development Section */}
        <div className="tech-category">
          <h3 className="category-heading">Frontend Development</h3>
          
          <div className="tech-grid">
            {frontendTechs.map((tech, index) => (
              <div key={index} className="tech-card">
                {/* In a real application, replace the icon string with 
                  <img src={tech.iconUrl} alt={tech.name} /> 
                  or a dedicated <IconComponent />
                */}
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* You can add more categories here (e.g., Backend, Database, DevOps) */}
        {/* <div className="tech-category">
          <h3 className="category-heading">Backend Development</h3>
          ...
        </div> 
        */}
      </div>
    </section>
  );
};

export default TechStacks;