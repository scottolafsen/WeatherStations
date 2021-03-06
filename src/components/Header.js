import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        WWX
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        DashBoard
      </Link>
      <Link to="/webcams" className="item">
        Webcams
      </Link>
      <Link to="/map" className="item">
        Map
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Header;
