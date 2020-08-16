import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaRegCopy, FaHome, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";

import Logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Navbar className="side-nav-wrapper flex-column align-items-start">
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <Nav.Link eventKey="link-1">
        <FaHome />
        <span>لوحة المتابعة</span>
      </Nav.Link>
      <Nav.Link eventKey="link-1">
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
  );
};

export default SideMenu;
