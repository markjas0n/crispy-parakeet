import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles.css'; // Ensure styles are applied

// Main App component
function App() {
  const [currentSection, setCurrentSection] = useState('About');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false); // Start transition by hiding the content
    const timer = setTimeout(() => {
      setVisible(true); // Show content after the transition effect
    }, 50); // Small delay to allow for transition
    return () => clearTimeout(timer);
  }, [currentSection]);

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

  return (
    <div className="app">
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main className={`main-content ${visible ? 'visible' : ''}`}>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
