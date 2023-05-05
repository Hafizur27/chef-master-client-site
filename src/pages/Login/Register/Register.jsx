/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handelSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photoUrl.value;

    if (password.length < 6) {
      setError("You Need to provide 6 characters long password ");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const createUser = result.user;
        setError("");
        event.target.reset();
        setSuccess("Well come to chef master");
        updateUserData(createUser, photo, name);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, url, name) => {
    updateProfile(user, {
      photoURL: url,
      displayName: name,
    })
      .then(() => {
        console.log("user profile updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h4>Please Register</h4>
      <Form onSubmit={handelSignUp}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

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
            placeholder="Enter Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="url"
            name="photoUrl"
            placeholder="Enter photo url"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Sign-up
        </Button>
      </Form>
      <p className="mt-2">
        <small>
          If you have an account ? please{" "}
          <Link to="/login" className="fs-5 text-decoration-none ">
            log-in
          </Link>
        </small>
      </p>
      <p className="text-danger mt-2">{error}</p>
      <p className="text-info">{success}</p>
    </div>
  );
};

export default Register;
