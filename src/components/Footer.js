import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-textPrimary py-8" id="footer">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/Tademillion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://et.linkedin.com/in/tade-million-60735a344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="footer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
