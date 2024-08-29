// src/components/Portfolio.jsx
import React from 'react';
import Project from './Project';

// Array of project details to be displayed in the Portfolio section
const projects = [
  { title: 'Project 1', image: '/vite.svg', deployedLink: '#', repoLink: '#' },
  // Add more projects as needed
];

// Portfolio section displaying individual projects using the Project component
const Portfolio = () => {
  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
