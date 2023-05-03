/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '../../../public/banner.json'
import Lottie from "lottie-react";
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Container style={{height:'90vh'}}>
        <Row>
          <Col lg={4} className='d-flex align-items-center'>
         <div>
         <h2>Looking For Master Chef</h2>
          <p>Food is maybe the only universal things that really has the power to brings everyone together. No matter what culture, everywhere around the world people get together to eat food</p>
         </div>
            
            </Col>
          <Col lg={8} className='d-flex justify-content-end'>
          <div className='w-75'>
           <Lottie animationData={banner} loop={true} />
           </div>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default Banner;