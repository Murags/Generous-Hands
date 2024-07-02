import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("solid");
          navRef.current.classList.remove("transparent");
        } else {
          navRef.current.classList.add("transparent");
          navRef.current.classList.remove("solid");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize with transparent navbar
    if (navRef.current) {
      navRef.current.classList.add("transparent");
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <section className="navbar">
      <nav ref={navRef} id="nav" className="nav-elm">
        <div className="logo">
          <div className="logo-img"></div>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink className={isActive("/")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive("/About")} to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive("/Discover")} to="/Discover">
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink className={isActive("/Gallery")} to="/Gallery">
              Gallery
            </NavLink>
          </li>
          <li className="signup-li" id="signup-link">
            Sign Up
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
