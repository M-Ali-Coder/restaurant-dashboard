import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

const AppHeader = ({ toggleSideMenu }) => {
  return (
    <div className="app-header-wrapper d-flex justify-content-between align-items-center">
      <div className="toggle-side-menu" onClick={() => toggleSideMenu()}>
        <MdMenu />
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <MdNotificationsActive />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">You don't have any notifications</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AppHeader;
