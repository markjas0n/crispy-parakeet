// src/components/Resume.jsx
import React from 'react';

// Resume section displaying a link to download the resume and a list of proficiencies
const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-box">
        {/* Box for Download My Resume */}
        <a href="path-to-your-resume.pdf" download className="resume-link">
          Download My Resume
        </a>
      </div>
      <div className="proficiencies-box">
        {/* Box for Proficiencies */}
        <h3 className="proficiencies-header">Proficiencies</h3>
        <ul className="proficiencies-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
