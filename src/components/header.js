import React from "react";
import logo from "../assests/whitelogo.png";

const Header = () => {
  return (
    <header className="header-wrapper ">
      <nav className="navbar navbar-expand-lg fixed-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="img-fluid" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className=" navbar-toggler-icon"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rooms">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Faqs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn bg-white fw-bold header-btn" href="#blog">
                  Create an Account
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <a
                  className="btn btn-warning fw-bold px-3  header-btns header-btn"
                  href="#"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
