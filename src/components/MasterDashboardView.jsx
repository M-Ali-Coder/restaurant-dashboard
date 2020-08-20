import React from "react";
import { Row, Col } from "react-bootstrap";
import { MdDone, MdCancel, MdLock } from "react-icons/md";

const MasterDashboardView = () => {
  return (
    <>
      <div className="master-dashboard-view mt-5 mb-5">
        <Row>
          <Col sm={12} md={12} lg={4}>
            <div className="dashboard-view-item d-flex align-items-center bg-white mb-md-3 mb-sm-3 ">
              <div className="icon-wrapper mr-4">
                <MdDone />
              </div>
              <div className="about-order d-flex flex-column">
                <span className="order-count">0</span>
                <span className="order-statu text-muted">Order today</span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="dashboard-view-item d-flex align-items-center bg-white mb-md-3 mb-sm-3 ">
              <div className="icon-wrapper mr-4">
                <MdCancel />
              </div>
              <div className="about-order d-flex flex-column">
                <span className="order-count">0</span>
                <span className="order-statu text-muted">Cancelled orders today</span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="dashboard-view-item d-flex align-items-center bg-white mb-md-3 mb-sm-3 ">
              <div className="icon-wrapper mr-4">
                <MdLock />
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
