import React from "react";
import { Link } from "react-router-dom";

function SocialsNav() {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <Link to="/">Facebook</Link>
        </li>
        <li>
          <Link to="/">Twitter</Link>
        </li>
        <li>
          <Link to="/">Instagram</Link>
        </li>
        <li>
          <Link to="/">Youtube</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SocialsNav;
