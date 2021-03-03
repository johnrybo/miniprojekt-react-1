import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <img style={logoStyle} src={logo} alt="logo"></img>
      &nbsp;
      <p>
        <Link to="/info" style={linkStyle}>
          About
        </Link>
        <span> © 2021</span>
      </p>
    </footer>
  );
}
const logoStyle: CSSProperties = {
  width: "3rem",
  textAlign: "center",
};

const linkStyle: CSSProperties = {
  color: "white",
};
