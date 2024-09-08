// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

// Array of project details to be displayed in the Portfolio section
const projects = [
  { title: 'First Portfolio', image: '../assets/images/SS1', deployedLink: 'https://markjas0n.github.io/Portfolio/', repoLink: 'https://github.com/markjas0n/Portfolio'  },
  { title: 'Concert Tracker', image: '../assets/images/PRO1.GIF', deployedLink: '#', repoLink: 'https://github.com/akaufmanfrey/Concert-Tracker' },
  { title: 'Weather', image: '../assets/images/WEATHER.GIF', deployedLink: 'https://github.com/markjas0n/updated-bongos', repoLink: 'https://markjas0n.github.io/Portfolio/' },


  // Add more projects as needed
];

// Portfolio section displaying individual projects using the Project component
const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
