import React from "react";
import { Row, Col } from "react-bootstrap";
import { FcCheckmark, FcLock, FcDisapprove } from "react-icons/fc";

const MasterDashboardView = () => {
  return (
    <>
      <div className="master-dashboard-view mt-5 mb-5">
        <Row>
          <Col>
            <div className="dashboard-view-item d-flex p-4 align-items-center bg-white">
              <div className="mr-4">
                <FcCheckmark />
              </div>
              <div className="about-order d-flex flex-column">
                <span className="order-count">0</span>
                <span className="order-statu text-muted">Order today</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dashboard-view-item d-flex p-4 align-items-center bg-white">
              <div className="mr-4">
                <FcDisapprove />
              </div>
              <div className="about-order d-flex flex-column">
                <span className="order-count">0</span>
                <span className="order-statu text-muted">Cancelled orders today</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dashboard-view-item d-flex p-4 align-items-center bg-white">
              <div className="mr-4">
                <FcLock />
              </div>
              <div className="about-order d-flex flex-column">
                <span className="order-count">1</span>
                <span className="order-statu text-muted">Offline restaurant now</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

export default MasterDashboardView;
