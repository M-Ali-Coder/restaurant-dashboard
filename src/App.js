import React from "react";
import "./scss/App.scss";

import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import AppNotifications from "./components/AppNotifications";
import UserLogin from "./components/UserLogin";
import SideMenu from "./components/SideMenu";
import ReportsPage from "./components/ReportsPage";
import { Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNotifications />
        <Row>
          <Col md={3}>
            <SideMenu />
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/reports" component={ReportsPage} />
              <Route exact path="/user/login" component={UserLogin} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
