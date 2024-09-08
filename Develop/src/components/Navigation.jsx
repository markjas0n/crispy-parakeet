// src/components/Navigation.jsx
import React from 'react';

// Navigation component for switching between different sections of the portfolio
const Navigation = ({ setCurrentSection, currentSection }) => {
  // List of sections to display in the navigation menu
  const sections = [
    { name: 'About', displayName: '☞ About' },
    { name: 'Portfolio', displayName: '☞ Portfolio' },
    { name: 'Contact', displayName: '☞ Contact' },
    { name: 'Resume', displayName: '☞ Resumé' }
  ];

  return (
    <nav className="navigation">
      <ul>
        {sections.map((section) => (
          <li
            key={section.name}
            className={currentSection === section.name ? 'active' : ''}
            // Updates the current section when a navigation item is clicked
            onClick={() => setCurrentSection(section.name)}
          >
            {section.displayName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
