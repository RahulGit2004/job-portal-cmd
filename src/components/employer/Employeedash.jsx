// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import Navbar from "./employeenav";

// const Dashboard = () => {
//   const [clickedIndex, setClickedIndex] = useState(null);

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto mt-24 px-4">
//         <h2 className="text-2xl font-semibold">Hello, Owner Name</h2>
//         <p className="text-gray-600">Here is your daily activity and applications.</p>

//         {/* Cards for Open Jobs and Saved Candidates */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
//           <div className="flex justify-between items-center bg-[#FFF6E6] p-4 rounded-lg shadow-md">
//             <div>
//               <h5 className="text-xl font-bold">600</h5>
//               <p className="text-sm">Open Jobs</p>
//             </div>
//             <FontAwesomeIcon icon={faBriefcase} size="2x" />
//           </div>

//           <div className="flex justify-between items-center bg-[#C9C9EC] p-4 rounded-lg shadow-md">
//             <div>
//               <h5 className="text-xl font-bold">550</h5>
//               <p className="text-sm">Saved Candidates</p>
//             </div>
//             <FontAwesomeIcon icon={faBriefcase} size="2x" />
//           </div>
//         </div>

//         {/* Recently Posted Job Section */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold">Recently Posted Job</h3>
//           <span className="text-blue-700 font-semibold cursor-pointer">View All</span>
//         </div>

//         {/* Table Layout for Job Entries */}
//         <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-gray-800">
//                 <th className="py-3 px-4 text-left">JOBS</th>
//                 <th className="py-3 px-4 text-left">STATUS</th>
//                 <th className="py-3 px-4 text-left hidden md:table-cell">APPLICATION</th> {/* Hidden on small screens */}
//                 <th className="py-3 px-4 text-left">ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...Array(4)].map((_, index) => (
//                 <tr key={index} className="border-b border-gray-300">
//                   {/* Jobs Column */}
//                   <td className="py-4 px-4">
//                     <span className="font-semibold">UI / UX Designer</span>
//                     <br />
//                     <span className="text-sm text-gray-600">Full Time</span>
//                   </td>

//                   {/* Status Column */}
//                   <td className="py-4 px-4">
//                     <div className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold w-max">
//                       Active
//                     </div>
//                   </td>

//                   {/* Applications Column - Hidden on Small Screens */}
//                   <td className="py-4 px-4 hidden md:table-cell">
//                     <FontAwesomeIcon icon={faUser} className="mr-2" /> 789 Applications
//                   </td>

//                   {/* Actions Column */}
//                   <td className="py-4 px-4">
//                   <Link
//   to="/viewapplication"
//   className="px-4 py-2 border rounded-md font-semibold transition-all 
//              bg-[#1E3A8A] text-white border-[#1E3A8A] 
//              hover:bg-[#1E3A8A] 
//              "
// >
//   View
// </Link>


//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./employeenav";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("my token : ", token);
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const response = await fetch("http://localhost:8000/api/v1/job/getadminjobs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Cookie: `token=${token}`, // Setting token as a cookie
          },
          credentials: "include", // Ensures cookies are sent in the request
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setJobs(data.jobs || []); // Assuming API returns { jobs: [...] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-24 px-4">
        <h2 className="text-2xl font-semibold">Hello, Owner Name</h2>
        <p className="text-gray-600">Here is your daily activity and applications.</p>

        {/* Cards for Open Jobs and Saved Candidates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="flex justify-between items-center bg-[#FFF6E6] p-4 rounded-lg shadow-md">
            <div>
              <h5 className="text-xl font-bold">600</h5>
              <p className="text-sm">Open Jobs</p>
            </div>
            <FontAwesomeIcon icon={faBriefcase} size="2x" />
          </div>

          <div className="flex justify-between items-center bg-[#C9C9EC] p-4 rounded-lg shadow-md">
            <div>
              <h5 className="text-xl font-bold">550</h5>
              <p className="text-sm">Saved Candidates</p>
            </div>
            <FontAwesomeIcon icon={faBriefcase} size="2x" />
          </div>
        </div>

        {/* Recently Posted Job Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Recently Posted Job</h3>
          <span className="text-blue-700 font-semibold cursor-pointer">View All</span>
        </div>

        {/* Display Error or Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="py-3 px-4 text-left">JOBS</th>
                  <th className="py-3 px-4 text-left">STATUS</th>
                  <th className="py-3 px-4 text-left hidden md:table-cell">APPLICATION</th>
                  <th className="py-3 px-4 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="py-4 px-4">
                        <span className="font-semibold">{job.title}</span>
                        <br />
                        <span className="text-sm text-gray-600">{job.type}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div
                          className={`px-3 py-1 rounded-md text-sm font-semibold w-max ${
                            job.status === "Active" ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                          }`}
                        >
                          {job.status}
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <FontAwesomeIcon icon={faUser} className="mr-2" /> {job.applications} Applications
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          to={`/viewapplication/${job.id}`}
                          className="px-4 py-2 border rounded-md font-semibold transition-all 
                          bg-[#1E3A8A] text-white border-[#1E3A8A] hover:bg-[#1E3A8A]"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No jobs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
