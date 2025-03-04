import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import humanIcon from "../employer/profile.png";
import EinfratechLogo from "../employer/Einfratech.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={EinfratechLogo} alt="Einfratech Logo" style={{ height: "40px" }} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse.show navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Approvals</a>
            </li>
            <li className="nav-item">
              <Link to="/createjobform" className="nav-link fw-semibold text-dark" href="#">Posted Jobs</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Paid Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">Certifications</a>
            </li>
          </ul>
        </div>

        {/* User Icon */}
        <Link to = "/profiledashboard"><div className="d-flex align-items-center">
          <img src={humanIcon} alt="User" className="rounded-circle ms-3" style={{ height: "40px", width: "40px" }} />
        </div>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;