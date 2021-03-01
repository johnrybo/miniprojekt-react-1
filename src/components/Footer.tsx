import React, { CSSProperties } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import Info from "./Info";

function Footer() {
  return (
    <Router>
      <footer style={footerStyle}>
        <p>© JML 2021🌤</p>
        <p>
          <Link to="/info" style={linkStyle}>
            Information om väderdatan
          </Link>
        </p>
      </footer>

      <Route path="/info">
        <Info />
      </Route>

    </Router>
  );
}

const footerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
}

const linkStyle: CSSProperties = {
  cursor: "pointer",
  color: 'white'
}

export default Footer;
