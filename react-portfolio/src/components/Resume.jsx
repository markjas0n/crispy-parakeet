// src/components/Resume.jsx
import React from 'react';

// Resume section displaying a link to download the resume and a list of proficiencies
const Resume = () => {
  return (
    <section className="resume">
      {/* Link to download the resume */}
      <a href="path-to-your-resume.pdf" download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      {/* List of proficiencies */}
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
