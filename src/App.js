import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import TestRoute from "./components/TestRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestRoute} />
      </Switch>
    </div>
  );
}

export default App;
