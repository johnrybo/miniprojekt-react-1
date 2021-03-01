import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div>
      <div style={infoStyle}>
        <p>Väderdatan kommer från SMHI:s API</p>
        <a style={linkStyle} href="http://opendata.smhi.se/apidocs/metfcst/index.html">
          Klicka här för mer info
        </a>
        <p>
          <Link to="/" style={linkStyle}>Gå tillbaka till startsidan</Link>
        </p>
      </div>
    </div>
  );
}

const linkStyle: CSSProperties = {
    cursor: "pointer",
    color: 'white'
  };

const infoStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
};



export default Info;
