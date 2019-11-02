import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import DashBoard from "./pages/Dashboard";
import StationMap from "./pages/StationMap";
import StationDetail from "./pages/StationDetail";
import Webcams from "./pages/Webcams";
import WebcamDetail from "./pages/WebcamDetail";
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
            <Route path="/webcams" exact component={Webcams} />
            <Route path="/webcams/:id" exact component={WebcamDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
