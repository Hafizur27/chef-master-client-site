/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth (app);

const Register = () => {
const [error, setError] = useState('')
const [success, setSuccess] = useState('')

    const handelSignUp = event =>{
        event.preventDefault();
        setSuccess('');
        setError('');
       
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length <6){
            setError('You Need to provide 6 characters long password ');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const createUser = result.user;
            setError('');
            event.target.reset();
            setSuccess('Well come to chef master')
        })
        .catch(error => {
            setError(error.message);
            
        })
    }
  return (
    <div className="w-50 mx-auto">
        <h4>Please Register</h4>
      <Form onSubmit={handelSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="success" type="submit">
          Sign-up
        </Button>
      </Form>
      <p className="text-danger mt-2">{error}</p>
      <p className="text-info">{success}</p>
    </div>
  );
};

export default Register;
