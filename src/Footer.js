import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} The Resurrection. All rights reserved.</p>
        <a
          href="https://github.com/"
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
