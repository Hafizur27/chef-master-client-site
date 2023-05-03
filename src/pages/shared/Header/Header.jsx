/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Chef-Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="text-dark">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#login"
              className="d-flex align-items-center"
            >
              Login
              <FaUserTie />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
