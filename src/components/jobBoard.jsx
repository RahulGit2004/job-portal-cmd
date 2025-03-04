import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jobBoardImage from "../assets/laptop.jpg";

const JobBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const jobListings = [
    { title: "UX Designer", type: "(Remote)(Javascript)", salary: "3-3.5 LPA", daysAgo: "3 days ago", icon: "\u2692" },
    { title: "Software Engineer", type: "(Remote)", salary: "4-3.5 LPA", daysAgo: "1 day ago", icon: "\u2699" },
    { title: "UI Designer", type: "(Remote)(Adobe)", salary: "3-3.2 LPA", daysAgo: "2 days ago", icon: "\ud83c\udf10" },
    { title: "Design Engineer", type: "(Remote)", salary: "3-3.5 LPA", daysAgo: "1 day ago", icon: "\u2696" },
    { title: "Web Developer", type: "(Remote)", salary: "4-4.2 LPA", daysAgo: "4 days ago", icon: "\ud83d\udee0" }
  ];

  return (
    <Container fluid className="p-4">
      <Button className="d-md-none mb-3" onClick={toggleSidebar}>
        {sidebarOpen ? "✖" : "☰"}
      </Button>

      <Row>
        <Col md={3} className={`sidebar p-4 text-center ${sidebarOpen ? "d-block" : "d-none d-md-block"}`}>
          <h2 className="mb-3">JOB BOARD</h2>
          <img src={jobBoardImage} alt="Job Board" className="img-fluid mb-3"/>
          <ul className="list-unstyled">
            <li className="sidebar-item">&gt; Dashboard</li>
            <li className="sidebar-item">&gt; Job board</li>
            <li className="sidebar-item">&gt; Home</li>
          </ul>
        </Col>

        <Col md={9} className="p-4">
          <Row className="mb-3">
            <Col md={8}>
              <Form.Control type="text" placeholder="Search by Title / company / keywords" className="search-input" />
            </Col>
            <Col md={2}>
              <Button variant="primary" className="w-100 search-button">Search</Button>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h5 className="size">Location</h5>
              <Form.Select>
                <option>Select Location</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Gurgaon</option>
                <option>Noida</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <h5 className="size">Filter</h5>
              <Form.Select>
                <option>Select Filter</option>
                <option>UX Designer</option>
                <option>Software Engineer</option>
                <option>UI Designer</option>
                <option>Designer Engineer</option>
                <option>Web Developer</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="mt-4">
            {jobListings.map((job, index) => (
              <Card key={index} className="mb-3 p-3" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)" }}>
                <Row>
                  <Col xs={2} className="text-center fs-2">{job.icon}</Col>
                  <Col xs={7}>
                    <h5>{job.title}</h5>
                    <p className="text-muted">{job.type}</p>
                  </Col>
                  <Col xs={3} className="text-end">
                    <strong>[{job.salary}]</strong>
                    <p className="text-muted">{job.daysAgo}</p>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobBoard;
