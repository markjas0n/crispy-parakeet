// src/components/Navigation.jsx
import React from 'react';

// Navigation component for switching between different sections of the portfolio
const Navigation = ({ setCurrentSection, currentSection }) => {
  // List of sections to display in the navigation menu
  const sections = ['⌲ About', '⌲ Portfolio', '⌲ Contact', '⌲ Resume'];

  return (
    <nav className="navigation">
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={currentSection === section ? 'active' : ''}
            // Updates the current section when a navigation item is clicked
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
