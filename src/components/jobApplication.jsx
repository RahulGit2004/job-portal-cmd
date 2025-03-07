import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const JobApplicationForm = ({ jobId }) => {
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
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    // if (!formData.resume) newErrors.resume = "Resume is required";
    // setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("employmentStatus", formData.employmentStatus);
      formDataToSend.append("education", formData.education);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("resume", "");  // Ensure a file is selected if required
  
      const jobId = "67c7ffc063ca02df7877c9db"; // Replace with actual job ID
  
      try {
        const response = await fetch(`http://localhost:8000/api/v1/job/jobs/${jobId}/apply`, {
          method: "POST",
          body: formDataToSend,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include auth token
          },
        });

        // ✅ Handle response
        const result = await response.json();
        
        if (response.ok) {
          alert(result.message || "Application submitted successfully!");

          // Save job ID in local storage
          localStorage.setItem("appliedJobId", jobId);
          console.log("Job ID saved in local storage:", jobId);
        } else {
          alert(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("❌ Error submitting application:", error);

        // ✅ Check if error.message exists, otherwise show a fallback message
        alert(error.message || "An unexpected error occurred. Please try again.");
      }
    }
};

  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
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
      <h1 className="mb-4 text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1E3A8A" }}>
        Job Application
      </h1>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errors.server && <div className="alert alert-danger">{errors.server}</div>}

      <form onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            </div>
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
              <input type="text" name="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
          </div>
        </div>

        {/* Education & Job Title */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <label className="form-label">Education Level</label>
            <select name="education" className="form-select" value={formData.education} onChange={handleChange}>
              <option value="">Select Education</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Applying for</label>
            <input type="text" name="position" className="form-control" value={formData.position} onChange={handleChange} />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="mb-4 text-center">
          <label className="form-label">Upload Resume</label>
          <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
            <span className="input-group-text"><FontAwesomeIcon icon={faFilePdf} /></span>
            <input type="file" name="resume" className="form-control" onChange={handleChange} />
          </div>
          {errors.resume && <small className="text-danger">{errors.resume}</small>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ backgroundColor: "#1E3A8A", borderColor: "#1E3A8A", fontSize: "20px", padding: "12px 60px" }}>
            {loading ? "Submitting..." : "Apply"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
