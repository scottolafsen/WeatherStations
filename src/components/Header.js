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
      <GoogleAuth />
    </div>
  );
};

export default Header;
