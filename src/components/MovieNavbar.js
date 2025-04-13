import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieNavbar = ({ onSearch }) => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          🎬 موقع محمد تقي للأفلام
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="ابحث عن فيلم..."
              className="me-2 search-input"
              onChange={(e) => onSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MovieNavbar;
