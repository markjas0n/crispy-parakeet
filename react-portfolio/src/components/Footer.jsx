// src/components/Footer.jsx
import React from 'react';

// Footer component with links to the developer's social media profiles
const Footer = () => {
  return (
    <footer className="footer">
      {/* Link to GitHub profile */}
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {/* Link to LinkedIn profile */}
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      {/* Link to Stack Overflow profile */}
      <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noopener noreferrer">
        Stack Overflow
      </a>
    </footer>
  );
};

export default Footer;
