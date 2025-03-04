import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { PiBriefcaseDuotone } from "react-icons/pi";
import einfratechLogo from "../candidate/Einfratech.png";

const JobDescriptionPage = () => {
  const jobStatus = [
    { status: "Active", location: "Bangalore", salary: "100-500k" },
    { status: "Rejected", location: "Hyderabad", salary: "80-400k" }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand fw-bold" href="#">
            <img src={einfratechLogo} alt="LOGO" style={{ width: 80, height: 50 }} />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse.show navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav me-5 mx-auto fs-6"> 
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">Applied Jobs</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="border-0 bg-transparent p-0">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                  alt="Profile" 
                  className="rounded-circle" 
                  width="50" 
                  height="50" 
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Search Bar */}
      <div className="container my-4 col-lg-9">
        <div className="input-group">
          <input type="text" className="form-control rounded-pill text-center bg-light" placeholder="Companies / Skills / Experience" />
          <button className="btn rounded-pill ms-2" style={{ background: "#1E3A8A", color: "white" }}>Search</button>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="container my-4 col-lg-10">
        <h3 className="fw-semibold text-center text-md-start">Hello, Username</h3>
        <p className="text-center text-md-start">Here is your daily activity and job alerts.</p>
      </div>

      {/* Job Statistics */}
      <div className="container my-4 col-lg-10">
        <div className="row mb-4 text-center">
          {[{ count: 600, label: "Applied Jobs", bg: "#E8E4F2", icon: <PiBriefcaseDuotone size={30} /> },
            { count: 250, label: "Favorite Jobs", bg: "#FDFBD4", icon: <FaHeart color="red" size={30} /> },
            { count: 179, label: "Job Alerts", bg: "#E4F7E2", icon: <IoNotifications size={30} style={{ color: "blue" }} /> }
          ].map((item, index) => (
            <div className="col-12 col-md-4 mb-3" key={index}>
              <div className="p-3 border rounded d-flex justify-content-between align-items-center shadow-sm" style={{ backgroundColor: item.bg }}>
                <div>
                  <h4 className="fw-bold">{item.count}</h4>
                  <p className="mb-1">{item.label}</p>
                </div>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Applied Jobs */}
      <div className="container my-4 col-lg-10">
        <h5>Recently Applied</h5>
        {jobStatus.map((job, index) => (
          <div key={index} className="p-3 border rounded shadow-sm mb-3" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="d-flex align-items-center">
              <img 
                src="https://play-lh.googleusercontent.com/XHAMg2tievEEjzTo91f7bCtBjjX6svmgDcPYFKCd3iHSqzG3wd3BajNZftOyjfMg4g" 
                alt="Company Logo" 
                className="me-3" 
                style={{ width: 50, height: 50 }}
              />
              <div>
                <h6 className="fw-bold">UPStock <sup className="badge bg-secondary">Remote</sup></h6>
                <p className="mb-1">{job.location} - {job.salary}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className={`badge bg-${job.status === "Active" ? "success" : "danger"}`}>{job.status}</span>
              <button className="btn btn-sm fw-semibold" style={{ borderColor: "#1E3A8A" }}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDescriptionPage;
