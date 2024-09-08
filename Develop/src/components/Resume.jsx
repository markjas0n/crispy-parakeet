// src/components/Resume.jsx
import React, { useState } from 'react';

// Resume section displaying a link to download the resume and a list of proficiencies
const Resume = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="resume">
      {/* Link to download the resume */}
      <a
        href="path-to-your-resume.pdf"
        download
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="resume-link"
      >
        {hover ? 'DOWNLOAD' : '☞ Resumé'}
      </a>
      <h3 className="proficiencies-header">Proficiencies</h3> <hr></hr>
      {/* List of proficiencies */}
      <ul className="proficiencies-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
