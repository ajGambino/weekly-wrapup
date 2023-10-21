import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalculator, faCrown, faHandHoldingDollar, faFootball } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleArchiveClick = () => {
    navigate("/archive");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky-navbar">
      <ul className="navbar-links">
        <Link to="/" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <li>
          <a href="#projections" className="scroll-link">
            <FontAwesomeIcon icon={faCalculator} />
          </a>
        </li>
        <li>
          <a href="#nuts" className="scroll-link">
            <FontAwesomeIcon icon={faFootball} />
          </a>
        </li>
        <li>
          <a href="#carp" className="scroll-link">
            <FontAwesomeIcon icon={faCrown} />
          </a>
        </li>
        <li>
          <a href="#sportsbook" className="scroll-link">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </a>
        </li>
        <li>
          <Link to="/archive"  onClick={handleArchiveClick}>
            Archive
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
