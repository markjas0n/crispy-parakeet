// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles.css'; // Ensure styles are applied

// Main App component
function App() {
  // State to track whether the Enter button has been clicked
  const [hasEntered, setHasEntered] = useState(false);
  // State to track the currently active section
  const [currentSection, setCurrentSection] = useState('About');

  // Function to render the selected section based on currentSection state
  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  // Function to handle the Enter button click
  const handleEnter = () => {
    setHasEntered(true); // Set state to show the main content
    setCurrentSection('About'); // Set the default section to About
  };

  return (
    <div className="app">
      {/* Display Enter button initially */}
      {!hasEntered ? (
        <div className="enter-screen">
          <button className="enter-button" onClick={handleEnter}>
            Enter
          </button>
        </div>
      ) : (
        <>
          {/* Header component with navigation */}
          <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
          {/* Main section renders the selected component */}
          <main>{renderSection()}</main>
          {/* Footer component */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
