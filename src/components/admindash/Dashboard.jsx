// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faCheckCircle, faTimesCircle, faBars } from "@fortawesome/free-solid-svg-icons";
// import Navbar from "../admindash/adminnavbar";
// import humanIcon from "../admindash/human.png";

// // Import images
// import imageIcon from "../admindash/image1.png";
// import graphIcon from "../admindash/graph.png";
// import bagIcon from "../admindash/bag.png";

// const Dashboard = () => {
//   const [approvedUsers, setApprovedUsers] = useState([]);
//   const [rejectedUsers, setRejectedUsers] = useState([]);
//   const [filter, setFilter] = useState("All");

//   const handleApprove = (id) => {
//     setApprovedUsers([...approvedUsers, id]);
//     setRejectedUsers(rejectedUsers.filter((userId) => userId !== id));
//   };

//   const handleReject = (id) => {
//     setRejectedUsers([...rejectedUsers, id]);
//     setApprovedUsers(approvedUsers.filter((userId) => userId !== id));
//   };




//   const filteredUsers = filter === "All" ? users : users.filter(user => user.type === filter);

//   const cards = [
//     { value: "999", label: "Users", color: "#C9EEC9", image: imageIcon, link: "/" },
//     { value: "159", label: "Employers", color: "#E0D9F6", image: graphIcon, link: "/" },
//     { value: "159", label: "Posted Jobs", color: "#D6C7E8", image: bagIcon, link: "/postedjobs" },
//   ];
  

//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUnverifiedUsers = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/v1/user/unverified-users");

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUnverifiedUsers();
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       {/* Summary Cards */}
//       <div className="container mt-4">
//       <div className="row text-center">
//         {cards.map((card, index) => (
//           <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
//             <div className="card shadow-sm p-3 rounded text-center" style={{ backgroundColor: card.color }}>
//               <div className="mx-auto rounded-circle bg-white p-3 shadow-sm" style={{ width: "70px", height: "70px" }}>
//                 <img src={card.image} alt="icon" className="w-100 h-100" />
//               </div>
//               <h4 className="fw-bold">{card.value}</h4>
//               <p>{card.label}</p>
//               <Link to={card.link}
//                className="btn btn-light mt-2">
//                 View Details <FontAwesomeIcon icon={faEye} />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//       {/* Users Section */}
//       <h3 className="mt-4 text-center fw-bold">Users</h3>
//       <p className="text-center text-muted">Find The People’s Journey With Us</p>

//       {/* User Table */}
//       <div className="container mt-4">
//         <div className="table-responsive">
//           <table className="table table-striped">
//             <thead className="table-light">
//               <tr>
//                 <th>Name</th>
//                 <th>Status</th>
//                 <th className="d-none d-md-table-cell">
//                   User Type
//                   <select className="ms-2 form-select form-select-sm d-inline w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
//                     <option value="All">All</option>
//                     <option value="Candidate">Candidate</option>
//                     <option value="Employer">Employer</option>
//                     <option value="Admin">Admin</option>
//                   </select>
//                 </th>
//                 <th className="d-none d-md-table-cell">Requests</th>
//                 <th className="d-table-cell d-md-none">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user) => (
//                 <tr key={user.id}>
//                   <td className="d-flex align-items-center">
//                   <img src={humanIcon} alt="User" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
//                     <div>
//                       <strong>{user.name}</strong>
//                       <br />
//                       <small className="text-muted">{user.email}</small>
//                     </div>
//                   </td>
//                   <td>
//                     <span className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"}`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="d-none d-md-table-cell">{user.type}</td>
//                   <td className="d-none d-md-table-cell">
//                   {approvedUsers.includes(user.id) ? (
//                       <button className="btn btn-success btn-sm">
//                         <FontAwesomeIcon icon={faCheckCircle} /> Approved
//                       </button>
//                     ) : rejectedUsers.includes(user.id) ? (
//                       <button className="btn btn-danger btn-sm">
//                         <FontAwesomeIcon icon={faTimesCircle} /> Rejected
//                       </button>
//                     ) : (
//                       <>
//                         <button className="btn btn-outline-success btn-sm me-2" onClick={() => handleApprove(user.id)}>
//                           <FontAwesomeIcon icon={faCheckCircle} /> Approve
//                         </button>
//                         <button className="btn btn-outline-danger btn-sm" onClick={() => handleReject(user.id)}>
//                           <FontAwesomeIcon icon={faTimesCircle} /> Reject
//                         </button>
//                       </>
//                     )}
//                   </td>
//                   <td className="d-table-cell d-md-none">
//                     <div className="dropdown">
//                       <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//                         <FontAwesomeIcon icon={faBars} />
//                       </button>
//                       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                         <li>
//                           <select className="form-select form-select-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
//                             <option value="All">All</option>
//                             <option value="Candidate">Candidate</option>
//                             <option value="Employer">Employer</option>
//                             <option value="Admin">Admin</option>
//                           </select>
//                         </li>
//                         <li>
//                           {approvedUsers.includes(user.id) ? (
//                             <button className="dropdown-item" disabled>
//                               <FontAwesomeIcon icon={faCheckCircle} /> Approved
//                             </button>
                            
//                           ) : (
//                             <>
//                               <button className="dropdown-item" onClick={() => handleApprove(user.id)}>
//                                 <FontAwesomeIcon icon={faCheckCircle} /> Approve
//                               </button>
                             
//                             </>
//                           )}
//                           {rejectedUsers.includes(user.id) ? (
//                             <button className="dropdown-item" disabled>
//                               <FontAwesomeIcon icon={faCheckCircle} /> Rejected
//                             </button>
                            
//                           ) : (
//                             <>
                            
//                               <button className="dropdown-item" onClick={() => handleReject(user.id)}>
//                                 <FontAwesomeIcon icon={faTimesCircle} /> Reject
//                               </button>
//                             </>
//                           )}
//                         </li>
//                       </ul>
//                     </div>
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



import { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [filter, setFilter] = useState("All"); 
  const [approvedUsers, setApprovedUsers] = useState([]); 
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/user/unverified-users");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data); // Store all users
        setFilteredUsers(data); // Initially, show all users
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on selection
  useEffect(() => {
    if (filter === "All") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => user.role === filter));
    }
  }, [filter, users]);

  // Handle Approve
  const handleApprove = (userId) => {
    setApprovedUsers([...approvedUsers, userId]);
    setRejectedUsers(rejectedUsers.filter(id => id !== userId));
  };

  // Handle Reject
  const handleReject = (userId) => {
    setRejectedUsers([...rejectedUsers, userId]);
    setApprovedUsers(approvedUsers.filter(id => id !== userId)); 
  };

  return (
    <div className="container mt-4">

      
      <h2>Unverified Users</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th className="d-none d-md-table-cell">
                User Type
                <select className="ms-2 form-select form-select-sm d-inline w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Employer">Employer</option>
                  <option value="Admin">Admin</option>
                </select>
              </th>
              <th className="d-none d-md-table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>
                  <strong>{user.fullName}</strong>
                  <br />
                  <small className="text-muted">{user.email}</small>
                </td>
                <td>
                  <span className="badge bg-danger">Unverified</span>
                </td>
                <td className="d-none d-md-table-cell">{user.role}</td>
                <td className="d-none d-md-table-cell">
                  {approvedUsers.includes(user._id) ? (
                    <button className="btn btn-success btn-sm" disabled>Approved</button>
                  ) : rejectedUsers.includes(user._id) ? (
                    <button className="btn btn-danger btn-sm" disabled>Rejected</button>
                  ) : (
                    <>
                      <button className="btn btn-outline-success btn-sm me-2" onClick={() => handleApprove(user._id)}>Approve</button>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => handleReject(user._id)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
