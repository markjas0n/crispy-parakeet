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
  const [currentSection, setCurrentSection] = useState('About');

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
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
