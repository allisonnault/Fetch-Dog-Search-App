import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header row align-items-center">
      <div className='col-5'>
        <h1>Fetch Dog Search</h1>
      </div>
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item p-3">
            <NavLink to="/search" className="nav-link">
              Search
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/" className="nav-link">
              Login
            </NavLink>
          </li>
          <li className="nav-item p-3">
            <NavLink to="/auth/logout" className="nav-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
