import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} The Resurrection.</p>
        <a
          href="https://github.com/ajGambino/weekly-wrapup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}  fade/>
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
