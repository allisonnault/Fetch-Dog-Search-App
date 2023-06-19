import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header row align-items-center">
      <div className="col-5">
        <h1 style={{paddingLeft: '5px'}}>Fetch Dog Search</h1>
      </div>
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item p-3">
            <a href="#/search" className="nav-link">
              Search
            </a>
          </li>
          <li className="nav-item p-3">
            <a href="#/logout" className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
