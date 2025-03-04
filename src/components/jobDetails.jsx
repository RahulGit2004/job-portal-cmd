import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdWallet } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { TiTime } from "react-icons/ti";
import { PiBagBold } from "react-icons/pi";

const JobDescriptionPage = () => {
  return (
    <div>
      <h1
        className="mb-4 text-center"
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1E3A8A" }}
      >
        Job Details
      </h1>

      {/* Job Details Section */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {/* Left - Job Description */}
          <div className="col-lg-8 mb-4">
            <div className="p-4 text-center rounded-4 shadow-sm bg-light">
              <p
                className="mb-4 text-center"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  color: "#1E3A8A",
                }}
              >
                Job Position
              </p>
              <div className="d-flex justify-center">
  <img
    src="https://img.freepik.com/premium-vector/career-concept-illustration-idea-job-progress-wealth_277904-445.jpg?semt=ais_hybrid"
    alt="Career"
    className="img-fluid w-50 rounded h-50 my-3"
  />
</div>

              <p className="text-start">
                A "job details page" typically includes information like the job
                title, company name, a brief description of the role, key
                responsibilities, required qualifications, preferred skills,
                location, employment type, salary range, application
                instructions, and sometimes a link to apply directly on the
                company's website.
              </p>

              <h4 className="fw-bold mt-4 mb-4">Job Description</h4>
              <p className="text-start">
                The job description outlines the responsibilities, skills, and
                qualifications required. It may also include employment type
                (e.g., full-time, part-time), salary, location, and links to
                apply.
              </p>
            </div>
          </div>

          {/* Right - Job Information Panel */}
          <div className="col-lg-3 pb-4">
            <div className="card p-4 shadow-sm text-center d-flex flex-column align-items-center bg-light">
              <h4 className="fw-bold">Website Name</h4>
              <a href="https://www.example.com" style={{ color: "#1E3A8A" }}>
                www.example.com
              </a>

              <hr />

              <div className="mb-4 d-flex align-items-center w-100 justify-content-start">
                <PiBagBold
                  size={20}
                  className="me-4"
                  style={{ color: "#1E3A8A" }}
                />
                <div className="text-start">
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Job Type:
                  </p>
                  <strong className="fs-5">JOB NAME</strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-center w-100 justify-content-start">
                <IoLocationSharp
                  size={20}
                  className="me-4"
                  style={{ color: "#1E3A8A" }}
                />
                <div className="text-start">
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Location:
                  </p>
                  <strong className="fs-5">Bangalore</strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-center w-100 justify-content-start">
                <IoMdWallet
                  size={20}
                  className="me-4"
                  style={{ color: "#1E3A8A" }}
                />
                <div className="text-start">
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Salary:
                  </p>
                  <strong className="fs-5">$10000</strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-center w-100 justify-content-start">
                <TiTime
                  size={20}
                  className="me-4"
                  style={{ color: "#1E3A8A" }}
                />
                <div className="text-start">
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Posted Date:
                  </p>
                  <strong className="fs-5">Posted 2 weeks ago</strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-center w-100 justify-content-start">
                <IoIosNotifications
                  size={20}
                  className="me-4"
                  style={{ color: "#1E3A8A" }}
                />
                <div className="text-start">
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Expire Date:
                  </p>
                  <strong className="fs-5">25th Jan, 2025</strong>
                </div>
              </div>

              <button
                className="btn rounded-3 w-50"
                style={{ background: "#1E3A8A", color: "white" }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
