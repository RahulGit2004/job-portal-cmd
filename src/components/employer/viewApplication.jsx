import React, { useState } from "react";
import profileImg from "../employer/profile.png";


const applicants = [
  { name: "John Doe", experience: "2 years", education: "B.Sc Computer Science", applied: "20 Feb 2025", image: profileImg },
  { name: "Jane Smith", experience: "1 year", education: "B.Tech IT", applied: "22 Feb 2025", image: profileImg },
  { name: "Michael Brown", experience: "3 years", education: "M.Sc AI", applied: "24 Feb 2025", image: profileImg },
  { name: "Emily Davis", experience: "0 years", education: "B.Des Graphic Design", applied: "25 Feb 2025", image: profileImg },
  { name: "Chris Wilson", experience: "5 years", education: "B.Sc Data Science", applied: "26 Feb 2025", image: profileImg },
  { name: "Sophia Lee", experience: "4 years", education: "B.Tech CSE", applied: "27 Feb 2025", image: profileImg },
];

const shortlisted = [
  { name: "Emily Davis", experience: "0 years", education: "B.Des Graphic Design", applied: "25 Feb 2025", image: profileImg },
  { name: "Michael Brown", experience: "3 years", education: "M.Sc AI", applied: "24 Feb 2025", image:profileImg },
  { name: "Chris Wilson", experience: "5 years", education: "B.Sc Data Science", applied: "26 Feb 2025", image: profileImg },
];

const JobApplication = () => {
  const [filter, setFilter] = useState("applicants");
  
  const displayedApplicants = filter === "applicants" ? applicants : shortlisted;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700">Job Application</h1>
      
      {/* Mobile Filter */}
      <div className="md:hidden flex justify-center mb-4">
        <select
          className="p-2 border rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="applicants">All Applicants</option>
          <option value="shortlisted">Shortlisted</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Applications Section */}
        <div className="bg-[#F8F9FA] rounded-lg shadow-lg p-4 md:p-6 md:col-span-2">
          <h2 className="text-lg font-bold mb-4">
            {filter === "applicants" ? "All Applications" : "Shortlisted Candidates"} 
            <span className="text-gray-500"> {displayedApplicants.length}</span>
          </h2>
          <div className="relative w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {displayedApplicants.map((applicant, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 border flex flex-col transition hover:bg-blue-200"
      >
        <img
          src={applicant.image}
          alt={applicant.name}
          className="h-12 w-12 rounded-full mb-2"
        />
        <h3 className="font-semibold">{applicant.name}</h3>
        <p className="text-sm text-gray-500">• UI / UX Designer</p>
        <p className="text-sm text-gray-500">• {applicant.experience} Experience</p>
        <p className="text-sm text-gray-500">• Education: {applicant.education}</p>
        <p className="text-sm text-gray-500">• Applied: {applicant.applied}</p>
        <button className="mt-2 px-4 py-1 bg-green-500 text-white text-sm rounded-md self-start hover:bg-green-600 transition">
          Accept
        </button>
      </div>
    ))}
  </div>
</div>

        </div>
        
        {/* Shortlisted Section*/}
        <div className="hidden md:block bg-[#F8F9FA] rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-lg font-bold mb-4">Shortlisted <span className="text-gray-500">{shortlisted.length}</span></h2>
          <div className="grid grid-cols-1 gap-4">
            {shortlisted.map((applicant, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 border flex flex-col hover:bg-blue-100 transition">
                <img src={applicant.image} alt={applicant.name} className="h-12 w-12 rounded-full mb-2" />
                <h3 className="font-semibold">{applicant.name}</h3>
                <p className="text-sm text-gray-500">• UI / UX Designer</p>
                <p className="text-sm text-gray-500">• {applicant.experience} Experience</p>
                <p className="text-sm text-gray-500">• Education: {applicant.education}</p>
                <p className="text-sm text-gray-500">• Applied: {applicant.applied}</p>
                <button className="mt-2 px-4 py-1 bg-red-500 text-white text-sm rounded-md self-start hover:bg-red-600 transition">Reject</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;


