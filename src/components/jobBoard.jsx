import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jobBoardImage from "../assets/laptop.jpg";

const JobBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [jobListings, setJobListings] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Added state for search input

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:8000/api/v1/job/jobs");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data)) {
          setJobListings(data);
          setFilteredJobs(data);
        } else if (data.jobs && Array.isArray(data.jobs)) {
          setJobListings(data.jobs);
          setFilteredJobs(data.jobs);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Function to filter jobs based on search and selected criteria
  const applyFilters = () => {
    let filtered = jobListings;

    if (selectedLocation) {
      filtered = filtered.filter(job => job.location.city.toLowerCase() === selectedLocation.toLowerCase());
    }

    if (selectedRole) {
      filtered = filtered.filter(job => job.jobRole.toLowerCase() === selectedRole.toLowerCase());
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        job =>
          job.title.toLowerCase().includes(query) ||
          job.jobRole.toLowerCase().includes(query) ||
          (job.tags && job.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    setFilteredJobs(filtered);
  };

  return (
    <Container fluid className="p-4">
      <Button className="d-md-none mb-3" onClick={toggleSidebar}>
        {sidebarOpen ? "✖" : "☰"}
      </Button>

      <Row>
        <Col md={3} className={`sidebar p-4 text-center ${sidebarOpen ? "d-block" : "d-none d-md-block"}`}>
          <h2 className="mb-3">JOB BOARD</h2>
          <img src={jobBoardImage} alt="Job Board" className="img-fluid mb-3" />
          <ul className="list-unstyled">
            <li className="sidebar-item">&gt; Dashboard</li>
            <li className="sidebar-item">&gt; Job board</li>
            <li className="sidebar-item">&gt; Home</li>
          </ul>
        </Col>

        <Col md={9} className="p-4">
          <Row className="mb-3">
            <Col md={8}>
              <Form.Control
                type="text"
                placeholder="Search by Title / Company / Keywords"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Button variant="primary" className="w-100 search-button" onClick={applyFilters}>
                Search
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <h5 className="size">Location</h5>
              <Form.Select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
              </Form.Select>
            </Col>

            <Col md={5}>
              <h5 className="size">Filter</h5>
              <Form.Select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="">Select Filter</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Backend Developer">Backend Developer</option>
              </Form.Select>
            </Col>

            <Col md={2} className="d-flex align-items-end">
              <Button variant="primary" className="w-100" onClick={applyFilters}>
                Apply
              </Button>
            </Col>
          </Row>

          <div className="mt-4">
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
                <p>Loading jobs...</p>
              </div>
            ) : error ? (
              <Alert variant="danger">{error}</Alert>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Card key={index} className="mb-3 p-3" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)" }}>
                  <Row>
                    <Col xs={2} className="text-center fs-2">📌</Col>
                    <Col xs={7}>
                      <h5>{job.title}</h5>
                      <p className="text-muted">{job.jobRole}</p>
                    </Col>
                    <Col xs={3} className="text-end">
                      <strong>₹{job.minSalary} - ₹{job.maxSalary}</strong>
                      <p className="text-muted">{job.location.city}, {job.location.country}</p>
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <p className="text-muted text-center mt-5"> No jobs found!!!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobBoard;
