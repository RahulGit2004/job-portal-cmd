import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Human from "./human.png";
import Einfratech from "./Einfratech.png";
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import PaidNav from "./paidNav";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col sm:flex-row justify-between items-center border border-gray-200 transition-transform hover:scale-105 duration-300">
      <div className="w-full sm:w-2/3 text-left">
        <h2 className="text-lg font-semibold">{job.title}</h2>
        

        {/* Salary Range */}
        <p className="text-gray-500">
          💰 Salary: <span className="font-bold">₹{job.minSalary} - ₹{job.maxSalary}</span>
        </p>

        {/* Location */}
        <p className="text-gray-500 flex items-center gap-1">
          <FaMapMarkerAlt /> {job.location?.city}, {job.location?.country}
        </p>


        {/* Vacancies */}
        <p className="text-gray-500">👥 Vacancies: {job.vacancies}</p>

      
      </div>

      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Active</span>
        
      </div>
    </div>
  );
};


const PostedJobs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch("http://localhost:8000/api/v1/job/jobs");
        const data = await response.json();
  
        console.log("API Response:", data);
  
        let jobsArray = [];
  
        if (Array.isArray(data)) {
          jobsArray = data;
        } else if (data.jobs && Array.isArray(data.jobs)) {
          jobsArray = data.jobs;
        } else {
          throw new Error("Unexpected response format");
        }
  
        // Sort jobs by date in descending order (latest first)
        jobsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
        setJobs(jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, []);
  return (
    <div className="container-fluid">
     
      <PaidNav/>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-left mb-9">All Posted Jobs Are Here</h1>
        

        {loading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <div className="space-y-6">
            {jobs.length > 0 ? (
              jobs.map((job, index) => <JobCard key={index} job={job} />)
            ) : (
              <p className="text-center text-gray-500">No jobs found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostedJobs;
