import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/manage" activeClassName="active-link">
            Manage
          </NavLink>
        </li>
        <li>
          <NavLink to="/graphs" activeClassName="active-link">
            Graphs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
