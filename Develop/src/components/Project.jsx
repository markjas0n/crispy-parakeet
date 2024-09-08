import React from 'react';

// Project component displaying the details of each individual project
const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
        Live Site
      </a>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;
