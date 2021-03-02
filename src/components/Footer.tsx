import React, { CSSProperties } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <Router>
      <footer>
        <div>
          <img style={logoStyle} src={logo} alt="logo"></img>
          &nbsp;
          <Link to="/info">
            <p> © 2021</p>
          </Link>
        </div>
      </footer>
    </Router>
  );
}
const logoStyle: CSSProperties = {
  width: "3rem",
};
export default Footer;
