/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Banner from "../../Banner/Banner";
import { getAuth, signOut } from "firebase/auth";
import AuthProvider, {
  AuthContext,
} from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
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
            <NavLink
              className={`text-decoration-none text-white btn`}
              to="/login"
            >
              Log-in
            </NavLink>
            <NavLink
              className={`text-decoration-none text-white btn ms-2`}
              to="/register"
            >
              Sign-up
            </NavLink>
            <NavLink
              onClick={logOut}
              className={`text-decoration-none text-white btn ms-2`}
              to="/"
            >
              Log-out
            </NavLink>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default Header;
