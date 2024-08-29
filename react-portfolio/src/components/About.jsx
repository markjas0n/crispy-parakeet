// src/components/About.jsx
import React from 'react';

// About section displaying a bio and an image of the developer
const About = () => {
  return (
    <section className="about uniform-section">
      <div className="about-content">
        <img src="/Users/markjason/Bootcamp/Challenges/react-port/react-portfolio/assets/images/IMG_7602 2.jpg" alt="Developer" className="profile-picture" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate web developer with a focus on building interactive, responsive, and user-friendly applications using the latest technologies. My expertise lies in creating seamless user experiences and crafting elegant, modern interfaces. I love to continuously learn and explore new ways to enhance my skills and deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
