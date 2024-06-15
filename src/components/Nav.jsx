import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
            to="/GroupedTeamMembers"
          >
            Teams
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
