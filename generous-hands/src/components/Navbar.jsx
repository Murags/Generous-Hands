import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SignupModal from "./SignUp";
import LoginModal from "./Login";

const NavBar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

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

  const openSignupModal = () => setSignupOpen(true);
  const closeSignupModal = () => setSignupOpen(false);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

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
          <li className="signup-li" id="signup-link" onClick={openSignupModal}>
            Sign Up
          </li>
        </ul>
      </nav>
      {isSignupOpen && <SignupModal closeModal={closeSignupModal} openLoginModal={openLoginModal} />}
      {isLoginOpen && <LoginModal closeModal={closeLoginModal} />}
    </section>
  );
};

export default NavBar;
