import React from 'react';
import Navigation from '../Navigation';

// Header component containing the site title and navigation
const Header = ({ setCurrentSection, currentSection }) => {
  return (
    <header className="header">
      <h1>Mark Jason</h1>
      {/* Navigation component to switch between sections */}
      <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
    </header>
  );
};

export default Header;
