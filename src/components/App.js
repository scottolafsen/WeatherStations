import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import DashBoard from "./pages/Dashboard";
import StationMap from "./pages/StationMap";
import StationDetail from "./pages/StationDetail";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/map" exact component={StationMap} />
            <Route path="/stations/:id" exact component={StationDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
