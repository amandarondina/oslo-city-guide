import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
           <img  src={logo}  /> 
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
    
            <li className="nav-item">
              <NavLink
                to="landmarks"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                What to see
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="restaurants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Where to eat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="hotels"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Where to stay
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="bars"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Where to party
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
