import React from 'react';
import { Link } from 'react-scroll';  // react-scroll 라이브러리에서 Link 사용

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
