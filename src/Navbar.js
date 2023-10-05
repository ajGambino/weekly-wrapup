import React from "react";

function Navbar() {
  return (
    <nav className="sticky-navbar">
      <ul>
        <li>
          <a href="#recap">Recap</a>
        </li>
        <li>
          <a href="#sweat">S.O.T.W.</a>
        </li>
        <li>
          <a href="#nuts">Top Plays</a>
        </li>
        <li>
          <a href="#carp">Carp's Crown</a>
        </li> <li>
          <a href="#projections">Projections</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
