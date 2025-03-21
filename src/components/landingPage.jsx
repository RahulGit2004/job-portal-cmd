//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
//import axios from "axios"; // Also ensure axios is imported if you're making API calls
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import jobSearchImage from "../assets/hero1.svg";
import googleLogo from "../assets/google.jpg";
import microsoftLogo from "../assets/microsoft.webp";
import flipkartLogo from "../assets/flipkart.png";
import youtubeLogo from "../assets/youtube.png";
import { useParams } from "react-router-dom";
import ibmLogo from "../assets/ibm.jpg";
import einfratechLogo from "../assets/Einfratech.png";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [jobs, setJobs] = useState([]); 
  const { id } = useParams();

  // Fetch jobs from backend API
  useEffect(() => {
    
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/job/jobs");
        const data = await response.json();
        console.log("Fetched Jobs:", data);

        // If data is an object containing a jobs array, update accordingly
        setJobs(data.jobs || data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);





  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="shadow-sm fixed top-0 left-0 w-full bg-white z-50">
        <div className="container-fluid flex justify-between items-center p-4 max-w-[1125px] mx-auto">
          {/* Logo */}
          <a href="#">
            <img src={einfratechLogo} alt="Einfratech Logo" className="h-10" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Navbar Links & Buttons */}
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center bg-white shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block p-3" : "hidden"
            }`}
          >
            <ul className="md:flex md:space-x-6 text-center md:text-left">
              <li>
                <Link className="block py-2 px-4 hover:text-blue-700" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-4 hover:text-blue-700"
                  to="/jobs"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-4 hover:text-blue-700"
                  to="/signin"
                >
                  Employers
                </Link>
              </li>
            </ul>

            {/* Buttons - Stack on mobile, inline on desktop */}
            <div className="md:flex md:space-x-3 text-center mt-2 md:mt-0">
              <Link
                to="/signup"
                className="block md:inline-block border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="block md:inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="container my-5 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start"
        style={{ maxWidth: "1125px", margin: "0 auto", paddingTop: "100px" }}
      >
        {/* Text and Search Input */}
        <div className="m-3 w-100">
          <h1 className="display-6 fw-bold">
            Your Skills Deserve the Right Job. <br /> Find It Here
          </h1>
          <p className="text-muted">
            Thousands of jobs across leading industries are waiting for you.
            Start applying today!
          </p>
          <div
            className="input-group shadow-sm m-3 mx-auto mx-md-0"
            style={{ maxWidth: "600px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Companies / Skills / Experience"
            />
            <button
              className="btn text-white"
              style={{ backgroundColor: "#1E3A8A" }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Hero Section Image */}
        <div className="p-3" style={{ maxWidth: "250px", marginLeft: "0" }}>
          <img src={jobSearchImage} alt="Job Search" className="img-fluid" />
        </div>
      </section>

      <section
        className="container my-5 text-center"
        style={{ maxWidth: "1125px", margin: "0 auto" }}
      >
        <h2 className="fw-bold display-4" style={{ fontSize: "2.5rem" }}>
          Trending Jobs
        </h2>
        <div className="row mt-4">
          {jobs.length > 0 ? (
            jobs.slice(0, 6).map((job) => (
              <div key={job._id.$oid} className="col-12 col-md-6 col-lg-4 mb-3">
                <div
                  className="card p-4 shadow-sm transition"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0px 10px 30px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 12px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <h4 className="mt-3 fw-semibold">{job.title}</h4>
                  <p className="text-muted">{job.jobRole}</p>
                  <p className="text-muted">
                    Salary: ₹{job.minSalary.toLocaleString()} - ₹
                    {job.maxSalary.toLocaleString()}
                  </p>
                  <p className="text-muted">
                    Location: {job.location.city}, {job.location.country}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <Link
                      to={`/job/${job._id}`}
                      className="btn border-primary text-primary"
                      style={{ borderRadius: "8px" }}
                    >
                      View details
                    </Link>
                    <Link
                      to={`/signin`}
                      className="btn text-white"
                      style={{
                        backgroundColor: "#1E3A8A",
                        borderRadius: "8px",
                      }}
                    >
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No jobs available at the moment.</p>
          )}
        </div>
      </section>

      {/* Top Companies */}
      <section
        className="container my-5 text-center"
        style={{ maxWidth: "1125px", margin: "0 auto" }}
      >
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
            <img
              key={company.name}
              src={company.src}
              alt={company.name}
              className="img-fluid"
              style={{ height: "50px" }}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        className="container my-5 text-center"
        style={{ maxWidth: "1125px", margin: "0 auto" }}
      >
        <h2 className="fw-bold">How It Works</h2>
        <p className="text-muted">
          Follow these simple steps to land your dream job!
        </p>
        <div className="mt-4">
          {[
            "👤 Sign up and build your profile",
            "🔍 Use filters to find jobs",
            "📄 Submit your application",
          ].map((step, index) => (
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
      <footer className="bg-white py-5 mt-5 shadow-sm">
        <div
          className="container"
          style={{ maxWidth: "1125px", margin: "0 auto" }}
        >
          <div className="row text-center text-md-start">
            {/* Company Info */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold text-dark">Einfratech Systems</h5>
              <p className="mb-1 text-secondary">
                <strong>Call now:</strong> +91 000000
              </p>
              <p className="text-muted">456 Chandni Chowk Street, India</p>
            </div>

            {/* Candidate Section */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold text-dark">Candidate</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-secondary">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Browse Employers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Candidate Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Saved Jobs
                  </a>
                </li>
              </ul>
            </div>

            {/* Employers Section */}
            <div className="col-12 col-md-3 mb-3">
              <h5 className="fw-bold text-dark">Employers</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-secondary">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Employers Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    Applications
                  </a>
                </li>
              </ul>
            </div>

            
            {/* Admin Section */}
            <div className="col-12 col-md-3 mb-4 mt-0">
            <h5 className="fw-bold text-dark">Admin</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary">
                  Manage User Data
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary">
                  Make Subscription Plan
                </a>
              </li>
            </ul>
          </div>
          </div>
          

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="me-3 text-dark">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="me-3 text-dark">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="me-3 text-dark">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-dark">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted mt-4">
            <p>
              &copy; {new Date().getFullYear()} Einfratech System. All Rights
              Reserved.
            </p>
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
              .hero-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-section img {
    margin-left: 0;
    margin-top: 20px;
  }

  .job-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .company-logos {
    justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;