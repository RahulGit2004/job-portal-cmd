import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import jobSearchImage from "../assets/image.png";
import googleLogo from "../assets/google.jpg";
import microsoftLogo from "../assets/microsoft.webp";
import flipkartLogo from "../assets/flipkart.png";
import youtubeLogo from "../assets/youtube.png";
import ibmLogo from "../assets/ibm.jpg";
import einfratechLogo from "../assets/Einfratech.png";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top" // Added fixed-top to make navbar stick to the top
        style={{ backgroundColor: "#FFFFFF", height: "88px", maxWidth: "1125px", margin: "0 auto" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={einfratechLogo}
              alt="Einfratech Logo"
              style={{ height: "40px" }}
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse.show navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/jobs">Jobs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signin">Employers</Link></li>
            </ul>
            <div className="d-flex">
              <Link to="/signup" className="btn" style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}>Sign Up</Link>
              <Link to="/signin" className="btn text-white ms-2" style={{ backgroundColor: "#1E3A8A" }}>Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="container my-5 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start"
        style={{ maxWidth: "1125px", margin: "0 auto", paddingTop: "100px" }} // Added paddingTop to account for fixed navbar
      >
        <div className="m-3 w-100">
          <h1 className="display-6 fw-bold">Your Skills Deserve the Right Job. <br /> Find It Here</h1>
          <p className="text-muted">Thousands of jobs across leading industries are waiting for you. Start applying today!</p>
          <div className="input-group shadow-sm m-3 mx-auto mx-md-0" style={{ maxWidth: "600px" }}>
            <input type="text" className="form-control" placeholder="Companies / Skills / Experience" />
            <button className="btn text-white" style={{ backgroundColor: "#1E3A8A" }}>Search</button>
          </div>
        </div>
        {/* Hero Section Image */}
        <div className="p-3">
          <img
            src={jobSearchImage}
            alt="Job Search"
            className="img-fluid"
            style={{ maxWidth: "250px", marginLeft: "-50px" }} // Adjusted margin to bring image closer
          />
        </div>
      </section>

      {/* Trending Jobs */}
      <section className="container my-5 text-center" style={{ maxWidth: "1125px", margin: "0 auto" }}>
        <h2 className="fw-bold">Trending Jobs</h2>
        <div className="row mt-4">
          {[1, 2, 3].map((job) => (
            <div key={job} className="col-12 col-md-4 mb-3">
              <div
                className="card p-4 shadow-sm transition"
                style={{
                  backgroundColor: "#D9D9D9",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="bg-primary text-white rounded-circle mx-auto d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                  Logo
                </div>
                <h3 className="mt-3">JOB TITLE</h3>
                <p className="text-muted">Job Description</p>
                <div className="d-flex justify-content-between">
                  <button className="btn" style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}>View details</button>
                  <button className="btn text-white" style={{ backgroundColor: "#1E3A8A" }}>Apply now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Companies */}
      <section className="container my-5 text-center" style={{ maxWidth: "1125px", margin: "0 auto" }}>
        <h2 className="fw-bold">Top Companies</h2>
        <p className="text-muted">Top companies hiring now</p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {[
            { name: "Google", src: googleLogo },
            { name: "Microsoft", src: microsoftLogo },
            { name: "Flipkart", src: flipkartLogo },
            { name: "YouTube", src: youtubeLogo },
            { name: "IBM", src: ibmLogo },
          ].map((company) => (
            <img key={company.name} src={company.src} alt={company.name} className="img-fluid" style={{ height: "50px" }} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container my-5 text-center" style={{ maxWidth: "1125px", margin: "0 auto" }}>
        <h2 className="fw-bold">How It Works</h2>
        <p className="text-muted">Follow these simple steps to land your dream job!</p>
        <div className="mt-4">
          {["👤 Sign up and build your profile", "🔍 Use filters to find jobs", "📄 Submit your application"].map((step, index) => (
            <div
              key={index}
              className="alert alert-primary d-flex align-items-center flex-wrap how-it-works-item"
            >
              <span className="me-2">{step.split(" ")[0]}</span>
              {step.split(" ").slice(1).join(" ")}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-4 mt-5">
        <div className="container" style={{ maxWidth: "1125px", margin: "0 auto" }}>
          <div className="row">
            {/* Company Info */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
              <h5 className="fw-bold">AlwaysApply</h5>
              <p className="mb-1"><strong>Call now:</strong> +91 000000</p>
              <p className="text-muted">
                456 Chandni Chowk Street, Near Red Fort, Old Delhi, New Delhi, Delhi 110006, India
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
              <h5 className="fw-bold">Quick Link</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted">About</a></li>
                <li><a href="#" className="fw-bold">Contact</a></li>
                <li><a href="#" className="text-muted">Admin</a></li>
              </ul>
            </div>

            {/* Candidate Section */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
              <h5 className="fw-bold">Candidate</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted">Browse Jobs</a></li>
                <li><a href="#" className="text-muted">Browse Employers</a></li>
                <li><a href="#" className="text-muted">Candidate Dashboard</a></li>
                <li><a href="#" className="text-muted">Saved Jobs</a></li>
              </ul>
            </div>

            {/* Employers Section */}
            <div className="col-12 col-md-3 text-center text-md-start">
              <h5 className="fw-bold">Employers</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted">Post a Job</a></li>
                <li><a href="#" className="text-muted">Browse Candidates</a></li>
                <li><a href="#" className="text-muted">Employers Dashboard</a></li>
                <li><a href="#" className="text-muted">Applications</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>
        {`
        .nav-link {
  color: #1E3A8A !important; /* Ensure the color is visible */
}
          .how-it-works-item {
            background-color: #B3B5F4;
            color: #000;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .how-it-works-item:hover {
            background-color: #8a90f2;
            transform: scale(1.05);
            font-weight: bold;
          }

          @media (max-width: 991.98px) {
            .navbar-collapse {
              background-color: #FFFFFF;
              position: absolute;
              top: 88px;
              left: 0;
              right: 0;
              z-index: 1000;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              padding: 20px;
              border-radius: 8px;
            }

            .navbar-nav {
              margin-bottom: 10px;
            }

            .navbar-toggler {
              border: none;
              outline: none;
            }

            .navbar-toggler:focus {
              box-shadow: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;