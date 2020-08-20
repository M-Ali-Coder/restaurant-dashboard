import React from "react";
import {
  MdChevronRight,
  MdFlashOn,
  MdToc,
  MdAccessAlarm,
  MdRestaurantMenu,
  MdLocationOn,
} from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-5">
      <Container fluid>
        <ListGroup>
          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <FaDollarSign />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Day end reports</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Today's summary</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <MdFlashOn />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Performance reports</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Orders and Incom</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <MdToc />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Order's Details</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Orders History Data</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <MdAccessAlarm />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Order's Details</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Orders History Data</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <MdRestaurantMenu />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Order's Details</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Orders History Data</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="reports-item-wrapper pt-2 pb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <MdLocationOn />
                  <div className="d-flex flex-column ml-3" style={{ fontSize: "14px" }}>
                    <Link to="#">
                      <span className="ml-2 text-muted">Order's Details</span>
                    </Link>
                    <Link to="#">
                      <span className="ml-2 text-muted">Orders History Data</span>
                    </Link>
                  </div>
                </div>
                <MdChevronRight />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default HomePage;
