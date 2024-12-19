import React from 'react';
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-light border-top py-4">
        <div className="container">
          <p className="text-center text-muted mb-2">
            © 2024 Tanin Rahman. All rights reserved.
          </p>
          <div className="d-flex justify-content-center">
            <a href="https://tanin-rahman-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
              <FaGlobe /> Portfolio
            </a>
            <a href="https://linkedin.com/in/taninrahman21" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
              <FaLinkedin/> LinkedIn
            </a>
            <a href="https://github.com/taninrahman21" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
              <FaGithub/> GitHub
            </a>
            <a href="https://facebook.com/taninrahman21" target="_blank" rel="noopener noreferrer" className="text-muted">
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;