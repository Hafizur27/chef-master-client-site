/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-success text-white pt-3 pb-2">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Meet Top  Chefs</h5>
              <ul className="list-unstyled">
                <li>Hiroyuki Sakai</li>
                <li>Apirawat</li>
                <li>Ferran Adrià</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Connect with us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className='text-white text-decoration-none'>Twitter</a>
                </li>
                <li>
                  <a href="#" className='text-white text-decoration-none'>Facebook</a>
                </li>
                <li>
                  <a href="#" className='text-white text-decoration-none'>Instagram</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@chef.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
           <hr />
            <Col>
              <p className="text-center mb-0"><small>© 2023 Hafizur Rahman. All rights reserved.</small></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;