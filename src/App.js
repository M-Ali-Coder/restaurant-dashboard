import React from "react";
import "./scss/App.scss";

import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import UserLogin from "./components/UserLogin";
import SideMenu from "./components/SideMenu";
import ReportsPage from "./components/ReportsPage";
import { Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);

    //binding
    this.toggleSideMenu = this.toggleSideMenu.bind(this);

    this.state = {
      showSideMenu: true,
    };
  }

  toggleSideMenu() {
    this.setState({ showSideMenu: !this.state.showSideMenu });
    console.log("fasfasdfsfsdfsd");
  }

  render() {
    const { showSideMenu } = this.state;
    return (
      <div className="App">
        <AppHeader toggleSideMenu={this.toggleSideMenu} />
        <Row>
          <Col md={0} sm={0} lg={3}>
            <SideMenu showSideMenu={showSideMenu} toggleSideMenu={this.toggleSideMenu} />
          </Col>
          <Col md={12} sm={12} lg={9}>
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
