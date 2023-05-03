/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    
    return (
        <div className="w-50 mx-auto">
        <h4>Please Login</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="success" type="submit">
          Log-in
        </Button>
      </Form>
      
    </div>
    );
};

export default Login;