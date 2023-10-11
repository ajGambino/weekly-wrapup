import React from "react";
import './styles.css';

function Navbar() {
  return (
    <nav className="sticky-navbar">
      <ul className="navbar-links">
        <li>
          <a href="#recap" className="scroll-link">
            Recap
          </a>
        </li>
       {/*  <li>
         <a href="#sweat" className="scroll-link">
            S.O.T.W.
          </a> 
        </li> */}
        <li>
          <a href="#nuts" className="scroll-link">
            Top Plays
          </a>
        </li>
        <li>
          <a href="#carp" className="scroll-link">
            Carp's Crown
          </a>
        </li>
        <li>
          <a href="#projections" className="scroll-link">
            Projections
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
