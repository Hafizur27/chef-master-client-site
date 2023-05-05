/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../../pages/shared/LeftSide/LeftSide";
import RightSide from "../../pages/shared/RightSide/RightSide";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
