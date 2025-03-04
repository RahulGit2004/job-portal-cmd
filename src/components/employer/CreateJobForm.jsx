import React from "react";
import { Link } from "react-router-dom";
const CreateJobForm = () => {
  return (
    <div className="container mt-4">
      {/* Title */}
      <h2 className="fw-bold text-primary" style={{ color: "#1E3A8A" }}>Create a Job</h2>
      <p className="text-muted">Find the best talent for your company</p>

      {/* Form */}
      <div className="row">
        {/* Job Title */}
        <div className="col-12 mb-3">
          <div className="p-2 rounded">
            <label className="form-label fw-bold">Job Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Add job title, role vacancies etc"
              style={{ height: "45px" }}
            />
          </div>
        </div>

        {/* Tags & Job Roles */}
        <div className="col-md-6 mb-3">
          <div className="p-2 rounded">
            <label className="form-label fw-bold">Tags</label>
            <input
              type="text"
              className="form-control"
              placeholder="Job keyword, tags etc.."
              style={{ height: "45px" }}
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="p-2 rounded">
            <label className="form-label fw-bold">Job Roles</label>
            <input
              type="text"
              className="form-control"
              placeholder="Job roles, responsibilities..."
              style={{ height: "45px" }}
            />
          </div>
        </div>

        {/* Salary Section */}
        <div className="col-12 mb-3">
          <div className="p-2 rounded">
            <h5 className="fw-bold mb-3">Salary</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Min Salary</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min Salary..."
                    style={{ height: "45px" }}
                  />
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Max Salary</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max Salary..."
                    style={{ height: "45px" }}
                  />
                  <span className="input-group-text">INR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vacancies & End Date */}
        <div className="col-md-6 mb-3">
          <div className="p-2 rounded">
            <label className="form-label fw-bold">Vacancies</label>
            <select className="form-select" style={{ height: "50px" }}>
              <option>Select...</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="p-2 rounded">
            <label className="form-label fw-bold">End Date</label>
            <input type="date" className="form-control" style={{ height: "50px" }} />
          </div>
        </div>

        {/* Location Section */}
        <div className="col-12 mb-3">
          <div className="p-2 rounded">
            <h5 className="fw-bold mb-3">Location</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Country</label>
                <select className="form-select" style={{ height: "50px" }}>
                  <option>Select...</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">City</label>
                <select className="form-select" style={{ height: "50px" }}>
                  <option>Select...</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-4">
        <button
          className="btn px-5 py-2"
          style={{ backgroundColor: "#1E3A8A", borderColor: "#1E3A8A", color: "white" }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateJobForm;