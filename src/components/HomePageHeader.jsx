import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const HomePageHeader = () => {
  return (
    <div className="home-page-header-wrapper">
      <Row className="mt-5">
        <Col md={9}>
          <h5 className="text-uppercase">
            Welcome <span>Chicken Dizer</span>
          </h5>
          <p className="text-muted">See how your restaurants are performing</p>
        </Col>
        <Col md={3}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Vendors</Form.Label>
              <Form.Control as="select" custom>
                <option>Checken Dizer</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <hr className="custom-divider" />
    </div>
  );
};

export default HomePageHeader;
