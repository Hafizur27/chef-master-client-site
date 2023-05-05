/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handelLogIn = (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h4>Please Login</h4>
      <Form onSubmit={handelLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Log-in
        </Button>
      </Form>
      <div>
        <h5 className="mt-4">Login With</h5>
        <Button
          className="me-2"
          variant="outline-primary"
          onClick={handelGoogleLogIn}
        >
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary" onClick={handelGithubLogIn}>
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
      <p className="mt-2">
        <small>
          If you did not have an account ? please{" "}
          <Link to="/register" className="fs-5 text-decoration-none">
            Sign-up
          </Link>
        </small>
      </p>
      <p className="text-danger mt-2">{error}</p>
    </div>
  );
};

export default Login;
