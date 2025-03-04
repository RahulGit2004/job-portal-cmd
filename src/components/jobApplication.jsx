import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    employmentStatus: "",
    education: "",
    position: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        employmentStatus: checked ? value : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === "resume" ? files[0] : value,
      });
    }
  };

  return (
    <div
      className="container mt-5 p-5"
      style={{
        maxWidth: "800px",
        backgroundColor: "#f8f9fa",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.15)",
      }}
    >
      <h1
        className="mb-4 text-center"
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1E3A8A" }}
      >
        Job Application
      </h1>

      <form>
        {/* First & Last Name */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Education & Job Title */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">Education Level</label>
            <select className="form-select">
              <option>Select Education</option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Applying for</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job title"
            />
          </div>
        </div>

        {/* Employment Status */}
        <div className="mb-4">
          <label className="form-label">Employment Status</label>
          <div className="d-flex flex-wrap gap-3">
            {["Employed", "Self-Employed", "Unemployed", "Student"].map(
              (status, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={status}
                  />
                  <label className="form-check-label">{status}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div className="mb-4 text-center">
          <label className="form-label">Upload Resume</label>
          <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
            <span className="input-group-text">
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
            <input type="file" className="form-control" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "#1E3A8A",
              borderColor: "#1E3A8A",
              fontSize: "20px",
              padding: "12px 60px",
            }}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;