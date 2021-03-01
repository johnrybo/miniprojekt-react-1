import React, { CSSProperties } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";

function Info() {
  return (
    <Router>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <p>Väderdatan kommer från SMHI:s API</p>
          <a
            style={linkStyle}
            href="http://opendata.smhi.se/apidocs/metfcst/index.html"
          >
            Klicka här för mer info
          </a>
          <p>
            <Link to="/" style={linkStyle}>
              Gå tillbaka till startsidan
            </Link>
          </p>
        </div>
      </div>

      <Route exact path="/" component={App} />

    </Router>
  );
}

const containerStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

const linkStyle: CSSProperties = {
  cursor: "pointer",
  color: "white",
};

const infoStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "center",
  width: '100%',
  height: '100%',
  backgroundColor: 'thistle'
};

export default Info;
