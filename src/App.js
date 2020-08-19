import React from "react";
import "./scss/App.scss";
import HomePage from "./components/HomePage";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { FaHome, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";

import Logo from "./assets/images/logo.jpg";
import { Link } from "react-router-dom";
import ReportsComponent from "./components/ReportsComponent";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "reports",
    };
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <Row>
          <Col md={3}>
            <Navbar className="side-nav-wrapper flex-column align-items-start">
              <Link to="/" className="brand-logo">
                <img src={Logo} alt="logo" />
              </Link>
              <Nav.Link
                eventKey="link-1"
                onClick={() => this.setState({ currentPage: "homepage" })}
              >
                <FaHome />
                <span>لوحة المتابعة</span>
              </Nav.Link>
              <Nav.Link eventKey="link-1" onClick={() => this.setState({ currentPage: "reports" })}>
                <FaCalendarAlt />
                <span>التقارير</span>
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <FaMapMarkerAlt />
                <span>مناطق التغطية</span>
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <AiOutlineDashboard />
                <span>إدارة القائمة</span>
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <AiOutlineDashboard />
                <span>اوقات الافتتاح</span>
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                <AiOutlineDashboard />
                <span>حالة الفرع</span>
              </Nav.Link>
            </Navbar>
            {/* Navabar */}
          </Col>
          <Col md={9}>
            {currentPage === "homepage" && <HomePage />}
            {currentPage === "reports" && <ReportsComponent />}
          </Col>
        </Row>
        {/* Navabar */}
      </div>
    );
  }
}

export default App;
