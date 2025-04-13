import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieNavbar = ({ onSearch }) => {
  return (
    <Navbar
      style={{ backgroundColor: "	#3e3e42" }}
      expand="lg"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          🎬 موقع محمد تقي للأفلام
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "rgb(219, 219, 227)" }}
          aria-controls="navbar-nav"
        />
        <Navbar.Collapse id="navbar-nav">
          <Form className="d-flex ms-auto">
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
