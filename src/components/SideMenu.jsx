import React from "react";
import Logo from "../assets/images/logo.jpg";

import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt, FaBuilding } from "react-icons/fa";
import { MdRestaurantMenu, MdAccessTime } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";

import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu-wrapper">
      {/* Navabar */}
      <div className="brand-logo">
        <Link to="/">
          <img src={Logo} alt="brand-logo" />
        </Link>
      </div>
      <div className="app-navigtor-wrapper">
        <Link to="/">
          <div className="side-menu-list-item">
            <AiOutlineDashboard />
            <span>لوحة المتابعة</span>
          </div>
        </Link>
        <Link to="/reports">
          <div className="side-menu-list-item">
            <FaCalendarAlt />
            <span>التقارير</span>
          </div>
        </Link>
        <Link to="/">
          <div className="side-menu-list-item">
            <MdRestaurantMenu />
            <span>إدارة القائمة </span>
          </div>
        </Link>
        <Link to="/">
          <div className="side-menu-list-item">
            <FaMapMarkerAlt />
            <span>مناطق التغطية </span>
          </div>
        </Link>
        <Link to="/">
          <div className="side-menu-list-item">
            <MdAccessTime />
            <span>اوقات الافتتاح </span>
          </div>
        </Link>
        <Link to="/">
          <div className="side-menu-list-item">
            <FaBuilding />
            <span>حالة الفرع</span>
          </div>
        </Link>
        <Link to="/user/login">
          <div className="side-menu-list-item mt-3">
            <FaUserAlt />
            <span>تسجيل الدخول</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
