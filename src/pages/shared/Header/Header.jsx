/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Banner from "../../Banner/Banner";

const Header = () => {
  return (
    <>
        <Nav className="bg-success">
      <Container className="d-flex justify-content-between">
        <NavLink className={`text-decoration-none text-white py-2`} to="/">
          Chef Master
        </NavLink>
        <div className="py-2">
          <NavLink className={`text-decoration-none text-white`} to="/">
            Home
          </NavLink>
          <NavLink
            className={`text-decoration-none text-white mx-3`}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink className={`text-decoration-none text-white btn`} to="/login">
            Log-in
          </NavLink>
          <NavLink className={`text-decoration-none text-white btn ms-2`} to="/register">
            Sign-up
          </NavLink>
        </div>
      </Container>
    </Nav> 
    <Banner></Banner>
    </>
  );
};

export default Header;


