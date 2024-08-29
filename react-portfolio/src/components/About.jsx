// src/components/About.jsx
import React from 'react';

// About section displaying a bio and an image of the developer
const About = () => {
  return (
    <section className="about">
      <img src="/vite.svg" alt="Developer" className="avatar" /> {/* Updated image path */}
      <p>Hello! I'm a web developer specializing in building React applications...</p>
    </section>
  );
};

export default About;
