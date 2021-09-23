import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>A</span>vi
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink
                exact
                className="navitem"
                activeClassName="active_class"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navitem"
                activeClassName="active_class"
                to="/about"
              >
                about 
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navitem"
                activeClassName="active_class"
                to="/contact"
              >
                contact 
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navitem"
                activeClassName="active_class"
                to="/privacy"
              >
                privacy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="socia-media-desktop">
            <li>
              <a href="https://www.instagram.com/" target="_avi">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/abhishek-parmar-4563841b0/" target="_avi">
                <FaLinkedin className="linkedin" />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/profile.php?id=100034651867499" target="_avi">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu className="hmburger"/>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
 