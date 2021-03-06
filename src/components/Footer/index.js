import React from 'react';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'mdbreact';
const FooterPage = () => {
  return (
    <footer
      className="page-footer mt-0 font-small pt-4"
      style={{ backgroundColor: 'black', marginTop: 0 }}
    >
      <Container>
        <Row
          className="text-center text-md-left mt-5 pb-4"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Col md="3" lg="3" xl="3" className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold light-green-text">
              Recipes Advisor
            </h6>
            <p>
              All Rights Reserved
            </p>
          </Col>
          <hr
            className="w-100 clearfix d-md-none"
            style={{ marginLeft: '1260px' }}
          />
          <Col md="2" lg="2" xl="2" className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <Link to="/aboutus">About Us</Link>
            </p>
            <p>
              <Link to="/contactus">Contact Us</Link>
            </p>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col
            md="4"
            lg="3"
            xl="3"
            className="mt-3"
            style={{ marginRight: '-35px' }}
          >
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Yerevan, HH 2, ARM
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> recipesAdvisor@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg="3" style={{ display: 'flex', flexWrap: 'nowrap' }}>
            <p className="float-xl-right">
              &copy; {new Date().getFullYear()} Copyright:
              <a href="https://acafoodapi.haffollc.com"> Recipes Advisor </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterPage;
