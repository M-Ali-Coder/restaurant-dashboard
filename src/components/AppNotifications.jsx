import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

const AppNotifications = () => {
  return (
    <div className="app-notifigations-wrapper">
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

export default AppNotifications;
